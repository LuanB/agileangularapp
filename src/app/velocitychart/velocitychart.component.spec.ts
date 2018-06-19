import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VelocitychartComponent } from './velocitychart.component';

describe('VelocitychartComponent', () => {
  let component: VelocitychartComponent;
  let fixture: ComponentFixture<VelocitychartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VelocitychartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VelocitychartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
