import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RailTrainTimeTableDialogComponent } from './rail-train-time-table-dialog.component';

describe('RailTrainTimeTableDialogComponent', () => {
  let component: RailTrainTimeTableDialogComponent;
  let fixture: ComponentFixture<RailTrainTimeTableDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RailTrainTimeTableDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RailTrainTimeTableDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
