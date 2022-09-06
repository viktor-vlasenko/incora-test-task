class User {
  name: string;
  subscriptions: Subscription[];

  constructor(name: string) {
    this.name = name;
    this.subscriptions = [];
  }

  subscribe(streamingService: StreamingService) {
    let subscription = new Subscription(streamingService);
    let existingSubscription = this.subscriptions.find(
      (sub) => sub.streamingService.name === streamingService.name
    );
    if (!existingSubscription) {
      this.subscriptions.push(subscription);
      return subscription;
    } else {
      console.error(
        `Subscription failed. User is already subscribed to ${streamingService}`
      );
      return existingSubscription;
    }
  }
}

class StreamingService {
  name: string;
  shows: Show[];

  constructor(name: string) {
    this.name = name;
    this.shows = [];
  }

  addShow(show: Show) {
    if (this.shows.find((s) => s.name === show.name)) {
      console.error(
        `Can't add show. ${show.name} is already added to the ${this.name}`
      );
    } else {
      this.shows.push(show);
    }
  }

  viewsByShowNames() {
    let showsByName: { [key: string]: number } = {};
    this.shows.forEach((show) => {
      showsByName[show.name] = show.views;
    });
    return showsByName;
  }

  getMostViewedShowsOfYear(year: number) {
    const showsOfYear = this.shows.filter(
      (show) => show.releaseDate.getFullYear() === year
    );
    if (showsOfYear.length === 0) {
      return `Can't find shows released in ${year}`;
    } else {
      showsOfYear.sort((a, b) => a.views - b.views);

      let mostViewedShowsOfYear = showsOfYear.slice(0, 9 || showsOfYear.length); // add validation of length
      return mostViewedShowsOfYear;
    }
  }

  getMostViewedShowsOfGenre(genre: string) {
    const showsOfGenre = this.shows.filter((show) => show.genre === genre);
    if (showsOfGenre.length === 0) {
      return `Can't find shows in ${genre} genre`;
    } else {
      showsOfGenre.sort((a, b) => a.views - b.views);

      let mostViewedShowsOfGenre = showsOfGenre.slice(0, 9 || showsOfGenre.length); // add validation of length
      return mostViewedShowsOfGenre;
    }
  }
}

class Subscription {
  streamingService: StreamingService;

  constructor(streamingService: StreamingService) {
    this.streamingService = streamingService;
  }

  watch(showName: string) {
    const viewedShow = this.streamingService.shows.find(
      (show) => show.name === showName
    );
    if (viewedShow) {
      viewedShow.views++;
    } else {
      console.error(`Can't find ${showName} on ${this.streamingService.name}`);
    }
  }

  getRecommendationTrending() {}

  getRecommendationByGenre(genre: string) {}
}

abstract class Show {
  name: string;
  genre: string;
  releaseDate: Date;
  views: number;

  constructor(name: string, genre: string, releaseDate: Date) {
    this.name = name;
    this.genre = genre;
    this.releaseDate = releaseDate;
    this.views = 0;
  }

  abstract getDuration(): number;
}

class Movie extends Show {
  duration: number;

  constructor(
    name: string,
    genre: string,
    releaseDate: Date,
    duration: number
  ) {
    super(name, genre, releaseDate);
    this.duration = duration;
  }

  getDuration(): number {
    return this.duration;
  }
}

class Episode extends Show {
  duration: number;
  series: Series;

  constructor(
    name: string,
    genre: string,
    releaseDate: Date,
    duration: number,
    series: Series
  ) {
    super(name, genre, releaseDate);
    this.duration = duration;
    this.series = series;
  }

  getDuration(): number {
    return this.duration;
  }
}

class Series extends Show {
  episodes: Episode[];

  constructor(name: string, genre: string, releaseDate: Date) {
    super(name, genre, releaseDate);
    this.episodes = [];
  }

  addEpisode(episode: Episode) {
    this.episodes.push(episode);
  }

  getDuration(): number {
    const durations = this.episodes.map((ep) => ep.duration);
    return durations.reduce((prev, cur) => prev + cur);
  }
}

// Working code

let user1 = new User("Viktor");

const netflix = new StreamingService("Netflix");
const amazonPrime = new StreamingService("Amazon Prime");

let narutoShow = new Series("Naruto", "Anime", new Date(2002, 9, 3));

let narutoS01Ep001 = new Episode(
  "Episode 1",
  "Anime",
  new Date(2002, 9, 3),
  23,
  narutoShow
);

narutoShow.addEpisode(narutoS01Ep001);

let witcherShow = new Series("The Witcher", "Fantasy", new Date(2019, 11, 20));

let witcherS01Ep01 = new Episode(
  "The End's Beginning",
  "Fantasy",
  new Date(2019, 11, 20),
  61,
  witcherShow
);

witcherShow.addEpisode(witcherS01Ep01);

netflix.addShow(narutoShow);
netflix.addShow(witcherShow);

let user1NetflixSubscription = user1.subscribe(netflix);

user1NetflixSubscription.watch("Naruto");
user1NetflixSubscription.watch("Naruto");
user1NetflixSubscription.watch("Naruto");
user1NetflixSubscription.watch("Naruto");
user1NetflixSubscription.watch("Naruto");
user1NetflixSubscription.watch("The Witcher");
user1NetflixSubscription.watch("The Witcher");
user1NetflixSubscription.watch("The Witcher");

console.log(netflix.viewsByShowNames());
console.log(netflix.getMostViewedShowsOfGenre('Fantasy'));

