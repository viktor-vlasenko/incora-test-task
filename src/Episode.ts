import Show from "./Show";
import Series from "./Series";

export default class Episode extends Show {
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
