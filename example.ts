/*
 * This file shows working code of the application
 * Lines 6 - 235 are setting up services, users, subscriptions and shows
 * Lines 237 - 261 outputs some results of setup work into console
 * Uncomment certain lines and run the code to see the results
 *
 * First install ts-node package to run the file using command 'npm install'
 * Then you can run this file by writing in console 'npx ts-node example.ts'
 */

import Episode from "./src/Episode";
import Movie from "./src/Movie";
import Series from "./src/Series";
import StreamingService from "./src/StreamingService";
import User from "./src/User";

// Creating users
let user1 = new User("Alice");
let user2 = new User("Bob");
let user3 = new User("Charlie");

// Creating streaming services
const netflix = new StreamingService("Netflix");
const amazonPrime = new StreamingService("Amazon Prime");
const megogo = new StreamingService("MEGOGO");

// Creating 3 series and adding episodes to each of them
// 1st series
let narutoSeries = new Series("Naruto", "Anime", new Date(2002, 9, 3));
let narutoS01Ep001 = new Episode(
  "Enter: Naruto Uzumaki!",
  "Anime",
  new Date(2002, 9, 3),
  23,
  narutoSeries
);
let narutoS01Ep002 = new Episode(
  "My Name is Konohamaru!",
  "Anime",
  new Date(2002, 9, 10),
  23,
  narutoSeries
);
let narutoS01Ep003 = new Episode(
  "Sasuke and Sakura: Friends or Foes?",
  "Anime",
  new Date(2002, 9, 17),
  23,
  narutoSeries
);
let narutoS01Ep004 = new Episode(
  "Pass or Fail: Survival Test",
  "Anime",
  new Date(2002, 9, 24),
  23,
  narutoSeries
);
narutoSeries.addEpisode(narutoS01Ep001);
narutoSeries.addEpisode(narutoS01Ep002);
narutoSeries.addEpisode(narutoS01Ep003);
narutoSeries.addEpisode(narutoS01Ep004);

// 2nd series
let witcherSeries = new Series(
  "The Witcher",
  "Fantasy",
  new Date(2019, 11, 20)
);
let witcherS01Ep01 = new Episode(
  "The End's Beginning",
  "Fantasy",
  new Date(2019, 11, 20),
  61,
  witcherSeries
);
let witcherS01Ep02 = new Episode(
  "Four Marks",
  "Fantasy",
  new Date(2019, 11, 20),
  61,
  witcherSeries
);
let witcherS01Ep03 = new Episode(
  "Betrayer Moon",
  "Fantasy",
  new Date(2019, 11, 20),
  67,
  witcherSeries
);
witcherSeries.addEpisode(witcherS01Ep01);
witcherSeries.addEpisode(witcherS01Ep02);
witcherSeries.addEpisode(witcherS01Ep03);

// 3rd series
let theBoysSeries = new Series("The Boys", "Action", new Date(2019, 6, 26));
let theBoysS01Ep01 = new Episode(
  "The Name of the Game",
  "Action",
  new Date(2019, 6, 26),
  61,
  theBoysSeries
);
let theBoysS01Ep02 = new Episode(
  "Cherry",
  "Action",
  new Date(2019, 6, 26),
  60,
  theBoysSeries
);
let theBoysS01Ep03 = new Episode(
  "Get Some",
  "Action",
  new Date(2019, 6, 26),
  56,
  theBoysSeries
);
theBoysSeries.addEpisode(theBoysS01Ep01);
theBoysSeries.addEpisode(theBoysS01Ep02);
theBoysSeries.addEpisode(theBoysS01Ep03);

// Creating 5 movies
let onceUponATimeInHollywood = new Movie(
  "Once Upon A Time In... Hollywood",
  "Drama",
  new Date(2019, 6, 26),
  161
);
let babyDriver = new Movie("Baby Driver", "Action", new Date(2017, 5, 28), 115);
let scottPiligrimVsTheWorld = new Movie(
  "Scott Pilgrim vs. the World",
  "Action",
  new Date(2010, 7, 13),
  112
);
let greenBook = new Movie("Green Book", "Drama", new Date(2017, 8, 11), 130);
let thorRagnarok = new Movie(
  "Thor: Ragnarok",
  "Action",
  new Date(2017, 10, 2),
  125
);
let dayShift = new Movie("Day Shift", "Action", new Date(2022, 7, 12), 113);

// Adding series to streaming services
netflix.addShow(narutoSeries);
netflix.addShow(witcherSeries);
amazonPrime.addShow(theBoysSeries);
megogo.addShow(witcherSeries);
megogo.addShow(theBoysSeries);

// Adding series episodes to streaming services
for (let ep of narutoSeries.episodes) {
  netflix.addShow(ep);
}
for (let ep of witcherSeries.episodes) {
  netflix.addShow(ep);
}
for (let ep of theBoysSeries.episodes) {
  amazonPrime.addShow(ep);
}
for (let ep of witcherSeries.episodes) {
  megogo.addShow(ep);
}
for (let ep of theBoysSeries.episodes) {
  megogo.addShow(ep);
}

// Adding movies to streaming services
netflix.addShow(onceUponATimeInHollywood);
netflix.addShow(babyDriver);
netflix.addShow(scottPiligrimVsTheWorld);
netflix.addShow(greenBook);
netflix.addShow(dayShift);
amazonPrime.addShow(babyDriver);
amazonPrime.addShow(thorRagnarok);
megogo.addShow(thorRagnarok);
megogo.addShow(scottPiligrimVsTheWorld);
megogo.addShow(greenBook);

// subscribing users to streaming services
let user1NetflixSubscription = user1.subscribe(netflix);
let user1MegogoSubscription = user1.subscribe(megogo);
let user2NetflixSubscription = user2.subscribe(netflix);
let user2AmazonPrimeSubscription = user2.subscribe(amazonPrime);
let user3MegogoSubscription = user3.subscribe(megogo);

// watching shows on behalf of the users
user1NetflixSubscription.watch(narutoSeries.episodes[0].name);
user1NetflixSubscription.watch(narutoSeries.episodes[0].name);
user1NetflixSubscription.watch(narutoSeries.episodes[0].name);
user1NetflixSubscription.watch(narutoSeries.episodes[1].name);
user1NetflixSubscription.watch(narutoSeries.episodes[1].name);
user1NetflixSubscription.watch(narutoSeries.episodes[2].name);
user1NetflixSubscription.watch(witcherSeries.episodes[0].name);
user1NetflixSubscription.watch(witcherSeries.episodes[0].name);
user1NetflixSubscription.watch(witcherSeries.episodes[1].name);
user1NetflixSubscription.watch(witcherSeries.name);
user1NetflixSubscription.watch("Once Upon A Time In... Hollywood");
user1NetflixSubscription.watch("Once Upon A Time In... Hollywood");
user1NetflixSubscription.watch("Once Upon A Time In... Hollywood");
user1NetflixSubscription.watch("Once Upon A Time In... Hollywood");
user1NetflixSubscription.watch("Once Upon A Time In... Hollywood");
user1NetflixSubscription.watch("Once Upon A Time In... Hollywood");
user1NetflixSubscription.watch("Once Upon A Time In... Hollywood");
user1NetflixSubscription.watch(dayShift.name);
user1.subscriptions[0].watch(babyDriver.name);
user1.subscriptions[0].watch(babyDriver.name);
user1.subscriptions[0].watch(scottPiligrimVsTheWorld.name);
user1.subscriptions[0].watch(scottPiligrimVsTheWorld.name);
user1.subscriptions[0].watch(scottPiligrimVsTheWorld.name);
user1.subscriptions[0].watch(scottPiligrimVsTheWorld.name);
user1MegogoSubscription.watch(greenBook.name);
user1MegogoSubscription.watch(greenBook.name);
user1MegogoSubscription.watch(greenBook.name);
user1MegogoSubscription.watch(greenBook.name);
user1MegogoSubscription.watch(thorRagnarok.name);
user1MegogoSubscription.watch(thorRagnarok.name);
user1MegogoSubscription.watch(thorRagnarok.name);
user1MegogoSubscription.watch(thorRagnarok.name);
user1MegogoSubscription.watch(thorRagnarok.name);
user2NetflixSubscription.watch(greenBook.name);
user2NetflixSubscription.watch(greenBook.name);
user2NetflixSubscription.watch(greenBook.name);
user2NetflixSubscription.watch(greenBook.name);
user2NetflixSubscription.watch(greenBook.name);
user2NetflixSubscription.watch(greenBook.name);
user2NetflixSubscription.watch(babyDriver.name);
user2NetflixSubscription.watch(babyDriver.name);
user2NetflixSubscription.watch(babyDriver.name);
user2NetflixSubscription.watch(babyDriver.name);
user2NetflixSubscription.watch(dayShift.name);
user3MegogoSubscription.watch(scottPiligrimVsTheWorld.name);
user3MegogoSubscription.watch(scottPiligrimVsTheWorld.name);
user3MegogoSubscription.watch(theBoysS01Ep01.name);
user3MegogoSubscription.watch(theBoysS01Ep02.name);

// listing all shows with view count into console
console.table(netflix.viewsByShowNames());
console.table(megogo.viewsByShowNames());

// listing most viewed shows in genre
let netflixMostViewedActionShows = netflix.getMostViewedShowsOfGenre("Action");
console.log('Netflix most viewed action shows are', netflixMostViewedActionShows);

// listing most viewed shows of year
let netflixMostViewed2019Shows = netflix.getMostViewedShowsOfYear(2019);
console.log('Netflix most viewed 2019 shows are', netflixMostViewed2019Shows);

// getting recomendation for Action genre show
console.log('Recommended Action show to watch is', user1NetflixSubscription.getRecommendationByGenre("Action"));

// getting recomendation from trending
console.log('Recommended trending show to watch is', user1NetflixSubscription.getRecommendationTrending());

// getting duration of the shows in minutes
console.log(
  `Duration of Naruto series is ${narutoSeries.getDuration()} minutes`
);
console.log(
  `Duration of Once Upon A Time In... Hollywood is ${onceUponATimeInHollywood.getDuration()} minutes`
);
