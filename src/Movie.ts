import Show from "./Show";

export default class Movie extends Show {
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
