import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {
  planets:any={};
  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getPlanets().subscribe(data => {
      this.planets = data
      console.log(this.planets.results);
    }
  );
  }


}
