import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { CandidateComponent } from './components/candidate/candidate.component';
import { EmployerComponent } from './components/employer/employer.component';
import { HomeComponent } from './components/home/home.component';
import { SearchJobsComponent } from './components/search-jobs/search-jobs.component';
import { CandidateRegComponent } from './components/candidate-reg/candidate-reg.component';
import { RecruiterRegComponent } from './components/recruiter-reg/recruiter-reg.component';
import { CandidateDashboardComponent } from './components/candidate-dashboard/candidate-dashboard.component';
import { RecruiterDashboardComponent } from './components/recruiter-dashboard/recruiter-dashboard.component';
import { FormsModule } from '@angular/forms';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'candidate', component: CandidateComponent },
  { path: 'employer', component: EmployerComponent },
  { path: 'searchJobs/:disablitySelected', component: SearchJobsComponent },
  { path: 'searchJobs', component: SearchJobsComponent },

  { path: 'candidateRegistration', component: CandidateRegComponent },
  { path: 'recruiterRegistration', component: RecruiterRegComponent },
  { path: 'candidateDashboard', component: CandidateDashboardComponent },
  { path: 'recruiterDashboard', component: RecruiterDashboardComponent }


];

@NgModule({
  declarations: [
    AppComponent,
    CandidateComponent,
    EmployerComponent,
    HomeComponent,
    SearchJobsComponent,
    CandidateRegComponent,
    RecruiterRegComponent,
    CandidateDashboardComponent,
    RecruiterDashboardComponent
  ],
  imports: [
    BrowserModule ,
     HttpClientModule,
     RouterModule.forRoot(routes) ,
     FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
