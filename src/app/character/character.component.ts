import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
   
  // users : Object;
    users:any={};
  
    constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
        this.users = data
        console.log(this.users.results);
      }
    );
  }
  //firstClick(){
   // console.log('clicked');
    //this.h1Style = true;
 //   this.data.firstClick();
  //}
  
}
