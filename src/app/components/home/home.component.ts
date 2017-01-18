import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../services/movies.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //carrusel attributes.
  myInterval:number = 5000;
  noWrapSlides:boolean = false;
  
  currentPage: number = 1;
  urlImage: String = "https://image.tmdb.org/t/p/w500_and_h281_bestv2/";
  playingMovies:JSON;
  popularMovies:JSON;

  constructor(private movieService: MoviesService){}

  getMoviesNowPaying(page:number) : void {
      this.movieService.getMoviesNowPaying(this.currentPage).
      then(movies => {
          this.playingMovies = movies;
      });
  };

  getPopularMovies(page:number) : void {
      this.movieService.getPopularMovies(this.currentPage).
      then(movies => {
          this.popularMovies = movies;
      });
  };

  ngOnInit(): void{
      this.getMoviesNowPaying(this.currentPage);
      this.getPopularMovies(this.currentPage);
  }
}
