import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { DomSanitizer, SafeResourceUrl }   from '@angular/platform-browser';

import 'rxjs/add/operator/switchMap';

import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  urlImage: String = "https://image.tmdb.org/t/p/w500_and_h281_bestv2/";
  myInterval:number = 0;
  noWrapSlides:boolean = false;
  loading:String = null;

  movieDetails:any;

  constructor(private movieService: MoviesService,
              private route: ActivatedRoute,
              private sanitizer: DomSanitizer) { }

  buildUrl(id:string) : SafeResourceUrl {
    let urlVideo:string = "https://www.youtube.com/embed/" + id;
    let videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(urlVideo);

    return videoUrl;
  }

  buildUrlIMage(id:string) : String {
    let urlImage:string = this.urlImage + id;

    return urlImage;
  }

  getInitVideo(videos:Array<Object>) {
    let videoKey:SafeResourceUrl;

    if(videos !== null){
      videoKey = this.buildUrl(videos[0]['key']);
    }

    return videoKey;
  }

  ngOnInit(): void {
    this.route.params
        .switchMap((params: Params) => this.movieService.getMovieDetails(+params['id']))
        .subscribe(details => {
          this.movieDetails = details
          this.loading = "loaded";
        });
  }

}
