import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies:any={};

  constructor(private data:DataService) { }
  

  ngOnInit() {
    this.data.getMovies().subscribe(data => {
        this.movies = data
        console.log(this.movies.results);
      }
    );
  }

}
