import { Injectable } from '@angular/core';
import { AngularFireDatabase   } from 'angularfire2/database';



@Injectable({
  providedIn: 'root'
})
export class FirebaseDataService {
  

  constructor(
  private db: AngularFireDatabase
    ) {
  }


  // Return an observable list with optional query
  // You will usually call this from OnInit in a component
  
  writeUserData(userId,movie,Title,poster) {
    this.db.database.ref('users/' + userId).push({
      movieId: movie,
      movieTitle: Title,
      moviePoster: poster
    });
  }

  
  getData(userId){
  return this.db.database.ref('users/' + userId).once('value')
  }
     
  
  existInDatabase(userId,movieId){
    
    return this.db.database.ref('users/' + userId).orderByChild("movieId").equalTo(movieId).once("value",snapshot => {
      
  })
  }
  
  
  
}
