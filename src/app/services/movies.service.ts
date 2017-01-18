import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MoviesService {
  private theMovieDbUrl = 'http://api.themoviedb.org/3/';
  private apiKey = '8230c7ea8cb40f6fd40f8851a920b7bf';

  constructor(private http: Http) { }

  getMoviesNowPaying(page:number) : Promise<JSON> {
    let discover = 'movie/now_playing';
    let params = new URLSearchParams();

    params.set('page', page.toString());
    params.set('api_key', this.apiKey);
    params.set('r', 'json');
      
    let url =  this.theMovieDbUrl + discover;
    return this.http.get(url, {search: params})
              .toPromise()
              .then(movies => movies.json())
              .catch(this.handleError);
  }

  getPopularMovies(page:number) : Promise<JSON> {
    let popularMovies = 'movie/popular';
    let params = new URLSearchParams();

    params.set('page', page.toString());
    params.set('api_key', this.apiKey);
    params.set('r', 'json');
      
    let url =  this.theMovieDbUrl + popularMovies;
    return this.http.get(url, {search: params})
              .toPromise()
              .then(movies => movies.json())
              .catch(this.handleError);
  }

  getMovieDetails(id:number) : Promise<JSON> {
    let movieDetails = 'movie/'+id;
    let params = new URLSearchParams();

    params.set('api_key', this.apiKey);
    params.set('append_to_response', "account_states,alternative_titles,credits,images,keywords,videos,recomendations,similar_movies,reviews");
    params.set('r', 'json');
      
    let url =  this.theMovieDbUrl + movieDetails;
    return this.http.get(url, {search: params})
              .toPromise()
              .then(movies => movies.json())
              .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
  }
}
