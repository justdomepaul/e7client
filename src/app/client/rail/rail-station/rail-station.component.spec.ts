import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RailStationComponent } from './rail-station.component';

describe('RailStationComponent', () => {
  let component: RailStationComponent;
  let fixture: ComponentFixture<RailStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RailStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RailStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
