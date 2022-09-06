import Episode from "./Episode";
import Show from "./Show";

export default class StreamingService {
  name: string;
  shows: Show[];
  private showViews: { [key: string]: number };

  constructor(name: string) {
    this.name = name;
    this.shows = [];
    this.showViews = {};
  }

  _watch(show: Show) {
    this.showViews[show.name]++;
    if (show instanceof Episode) {
      this.showViews[show.series.name]++;
    }
  }

  addShow(show: Show) {
    if (this.shows.find((s) => s.name === show.name)) {
      console.error(
        `Can't add show. ${show.name} is already added to the ${this.name}`
      );
    } else if (
      show instanceof Episode &&
      !this.shows.find((s) => s.name === show.series.name)
    ) {
      console.error(
        `Can't add episode of the ${show.series.name} series. This series is not present on ${this.name}`
      );
    } else {
      this.shows.push(show);
      this.showViews[show.name] = 0;
    }
  }

  viewsByShowNames() {
    return this.showViews;
  }

  getMostViewedShowsOfYear(year: number) {
    const showsOfYear = this.shows.filter(
      (show) => show.releaseDate.getFullYear() === year
    );
    if (showsOfYear.length === 0) {
      console.log(`Can't find shows released in ${year}`);
      return null;
    } else {
      showsOfYear.sort((a, b) => {
        return this.showViews[b.name] - this.showViews[a.name];
      });
      if (showsOfYear.length < 10) {
        return showsOfYear;
      } else {
        return showsOfYear.slice(0, 10);
      }
    }
  }

  getMostViewedShowsOfGenre(genre: string) {
    const showsOfGenre = this.shows.filter((show) => show.genre === genre);
    if (showsOfGenre.length === 0) {
      console.log(`Can't find shows in ${genre} genre`);
      return null;
    } else {
      showsOfGenre.sort((a, b) => {
        return this.showViews[b.name] - this.showViews[a.name];
      });

      if (showsOfGenre.length < 10) {
        return showsOfGenre;
      } else {
        return showsOfGenre.slice(0, 10);
      }
    }
  }
}
