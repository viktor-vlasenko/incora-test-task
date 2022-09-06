import StreamingService from "./StreamingService";

export default class Subscription {
  streamingService: StreamingService;

  constructor(streamingService: StreamingService) {
    this.streamingService = streamingService;
  }

  watch(showName: string) {
    const viewedShow = this.streamingService.shows.find(
      (show) => show.name === showName
    );
    if (viewedShow) {
      this.streamingService._watch(viewedShow);
    } else {
      console.error(`Can't find ${showName} on ${this.streamingService.name}`);
    }
  }

  getRecommendationTrending() {
    let currentYear = new Date().getFullYear();
    let recommendedShows =
      this.streamingService.getMostViewedShowsOfYear(currentYear);
    if (!recommendedShows) {
      console.error(
        `No shows were released this year on ${this.streamingService.name}`
      );
      return null; 
    } else {
      recommendedShows.sort((a, b) => a.getDuration() - b.getDuration());
      let recommendedShowIdx = Math.floor(
        Math.random() * recommendedShows.length
      );
      let recommendedShow = recommendedShows[recommendedShowIdx];
      return recommendedShow;
    }
  }

  getRecommendationByGenre(genre: string) {
    let recommendedShows =
      this.streamingService.getMostViewedShowsOfGenre(genre);
    if (!recommendedShows) {
      console.error(
        `There are no shows of ${genre} genre on ${this.streamingService.name}`
      );
      return null; 
    } else {
      recommendedShows.sort((a, b) => a.getDuration() - b.getDuration());
      let recommendedShowIdx = Math.floor(
        Math.random() * recommendedShows.length
      );
      let recommendedShow = recommendedShows[recommendedShowIdx];
      return recommendedShow;
    }
  }
}
