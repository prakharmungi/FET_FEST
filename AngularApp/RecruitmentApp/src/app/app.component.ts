import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './services/data.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  loginName: string;

  password: string | number;
  constructor(private http: HttpClient, private dataService: DataService, private router: Router) { 
    // this.getInitialData();

  }

//   getInitialData = ()=> {
// this.dataService.getInitialData().subscribe((response)=>{

//   console.log('response',response);
// })
//   }

verifyUser = () => {

  if(this.loginName === 'prakharm' && this.password === 'pm123'){
    this.router.navigateByUrl('/CandidateDashboardComponent');
  }
    else 
    if(this.loginName === 'uditah' && this.password === 'ud123'){
      this.router.navigateByUrl('/RecruiterDashboardComponent');
    }
  }
}
