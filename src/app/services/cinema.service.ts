import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CinemaService {
  imdburl = "http://www.omdbapi.com/?apikey=14aa1dc0"; //&s=ring'  &t=vhgvhgvh
  constructor(private http: HttpClient) {}

  getMoviesBySearch(searchText: string) {
    searchText = searchText || "ring";
    const newUrl = `${this.imdburl}&s=${searchText}`;
    return this.http.get<{}>(newUrl);
  }
}
