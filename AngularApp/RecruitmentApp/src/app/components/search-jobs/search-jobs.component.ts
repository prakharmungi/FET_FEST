import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-jobs',
  templateUrl: './search-jobs.component.html',
  styleUrls: ['./search-jobs.component.css']
})
export class SearchJobsComponent implements OnInit {
selectedDisability: string ;
areResultsVisible: boolean;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.areResultsVisible = false;
    this.route.paramMap.subscribe((params: any) => {
      console.log('params', params);
      this.selectedDisability = params.params.disablitySelected;
    });
  }

}
