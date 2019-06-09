import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url = 'http://www.omdbapi.com/?apikey=7831c1e1';


  constructor(private http: HttpClient) { }

  getAll(showTitle,resultPage) {
    return this.http.get(`${this.url}&s=${showTitle}&page=${resultPage}`);
  }

  getById(id) {
    return this.http.get(`${this.url}&i=${id}`);
}
}
