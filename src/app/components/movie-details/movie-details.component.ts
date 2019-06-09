import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  public item$: any;
  constructor(private service: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("dupa");
    let id: string;
    this.route.paramMap
      .subscribe(params => {
        id = params.get('movie_id');
      });
    console.log(id);
    if (id) {
      console.log(id);
      this.service.getById(id).subscribe(res => {
        console.log(res)
        this.item$ = res;
      });
    }
  }

}
