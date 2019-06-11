import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { FirebaseDataService } from 'src/app/services/firebase-data.service';
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';



@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  public item$: any;
  inWatchlist:boolean=false;
  constructor(private service: MovieService, private route: ActivatedRoute,
    private fireData: FirebaseDataService, private authFire: FirebaseAuthService) { }

  ngOnInit() {
    this.getValueWithAsync().then((id) => {
      this.fireData.existInDatabase(this.authFire.user.uid, id).then((snapshot)=>{
        if (snapshot.exists()){
          console.log(snapshot.val())
          this.inWatchlist= true
          console.log(this.inWatchlist)
        }       
      }) 
    })
  }

  getValueWithAsync() {
    return new Promise(resolve => {
      let id: string;
      this.route.paramMap
        .subscribe(params => {
          id = params.get('movie_id');
        });
      if (id) {
        this.service.getById(id).subscribe(res => {
          this.item$ = res;
        });
      }
      resolve(id)
    });
  }

  addToWatchlist() {
    this.fireData.writeUserData(this.authFire.user.uid, this.item$.imdbID, this.item$.Title, this.item$.Poster)
    this.inWatchlist = true;
  }
}
