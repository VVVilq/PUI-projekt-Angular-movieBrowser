import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-browser',
  templateUrl: './movie-browser.component.html',
  styleUrls: ['./movie-browser.component.scss']
})
export class MovieBrowserComponent implements OnInit {
 
  exceptionToDisplay: string = ``;
  resultPage: number = 1;
  public items$: any;
  showSpecified: boolean = false;
  reactiveForm: FormGroup;


  constructor(private service: MovieService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.reactiveForm = new FormGroup({
      title: new FormControl('',Validators.required)
    })
  }
  getAll() {
    this.service.getAll(this.reactiveForm.get("title").value.trim(), this.resultPage).subscribe(response => {
      this.items$ = response;
    });
  }

  searchShow() {
    this.exceptionToDisplay = ``;
    this.resultPage = 1;
    this.showSpecified = true;
    this.getAll();

  }

  nextPage(){

    if (this.resultPage * 10 < this.items$.totalResults) {

      this.exceptionToDisplay = ``;
      this.resultPage = this.resultPage + 1;

      this.getAll();
      window.scroll(0,0);
    } else {

      this.exceptionToDisplay = `no more pages`;

    }
  }

  lastPage(){

    if (this.resultPage !== 1) {

      this.exceptionToDisplay = ``;
      this.resultPage = this.resultPage - 1;
      this.getAll();
      window.scroll(0,0);
    }
  }
}
