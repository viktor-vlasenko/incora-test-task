export default abstract class Show {
  name: string;
  genre: string;
  releaseDate: Date;

  constructor(name: string, genre: string, releaseDate: Date) {
    this.name = name;
    this.genre = genre;
    this.releaseDate = releaseDate;
  }

  abstract getDuration(): number;
}
