import { Component, OnInit } from '@angular/core';
import { FirebaseDataService } from 'src/app/services/firebase-data.service';

import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-to-watch',
  templateUrl: './to-watch.component.html',
  styleUrls: ['./to-watch.component.scss']
})
export class ToWatchComponent implements OnInit {
  public items:any[]=[];
  constructor(private userAuth: FirebaseAuthService,private dataService: FirebaseDataService) { }

  ngOnInit() {
    this.dataService.getData(this.userAuth.user.uid).then((snapshot) =>{   
      snapshot.forEach((snap)=>{  
        console.log(snap.val());
        this.items.push(snap.val());
        console.log(this.items);
      });
    });
  }

}

