import { Component, OnInit } from "@angular/core";
import { CinemaService } from "../services/cinema.service";

@Component({
  selector: "movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.sass"]
})
export class MovieListComponent implements OnInit {
  moviesList: {}[];
  constructor(private cinemaService: CinemaService) {}

  ngOnInit() {
    this.cinemaService
      .getMoviesBySearch("test")
      .subscribe((res: { Search: Array<{}> }) => {
        console.log(res.Search);
        this.moviesList = res.Search;
      });
  }
}
