import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateRegComponent } from './candidate-reg.component';

describe('CandidateRegComponent', () => {
  let component: CandidateRegComponent;
  let fixture: ComponentFixture<CandidateRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
