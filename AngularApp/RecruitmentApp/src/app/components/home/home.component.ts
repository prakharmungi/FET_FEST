import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  public disabilyList = ['Vision Impairment','Physical disability','Deafness'];
  selectedDisability: string = '';
  ngOnInit() {
  }

}
