import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterRegComponent } from './recruiter-reg.component';

describe('RecruiterRegComponent', () => {
  let component: RecruiterRegComponent;
  let fixture: ComponentFixture<RecruiterRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruiterRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
