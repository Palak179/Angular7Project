import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }
 /* firstClick(){
    return console.log("You clicked me!!");
  }*/
  getUsers(){
   // return this.http.get('https://reqres.in/api/users');
   return this.http.get('https://swapi.co/api/people');
  }
  getPlanets(){
    return this.http.get('https://swapi.co/api/planets');
  }
  getMovies(){
    return this.http.get('https://swapi.co/api/films');
  }
}
