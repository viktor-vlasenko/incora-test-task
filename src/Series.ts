import Show from "./Show";
import Episode from "./Episode";

export default class Series extends Show {
  episodes: Episode[];

  constructor(name: string, genre: string, releaseDate: Date) {
    super(name, genre, releaseDate);
    this.episodes = [];
  }

  addEpisode(episode: Episode) {
    let existingEpisode = this.episodes.find((ep) => ep.name === episode.name);
    if (existingEpisode) {
      console.error(
        `Episode with '${episode.name}' already exist in ${this.name} series`
      );
    } else {
      this.episodes.push(episode);
    }
  }

  getDuration(): number {
    const durations = this.episodes.map((ep) => ep.duration);
    return durations.reduce((prev, cur) => prev + cur);
  }
}
