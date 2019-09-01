import { Component, OnInit, Input } from "@angular/core";
import { Movie } from "../movie.interface";

@Component({
  selector: "movie-item",
  templateUrl: "./movie-item.component.html",
  styleUrls: ["./movie-item.component.sass"]
})
export class MovieItemComponent implements OnInit {
  @Input() data: Movie;

  constructor() {}

  ngOnInit() {}
}
