import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgilemeetingtimerComponent } from './agilemeetingtimer.component';

describe('AgilemeetingtimerComponent', () => {
  let component: AgilemeetingtimerComponent;
  let fixture: ComponentFixture<AgilemeetingtimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgilemeetingtimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgilemeetingtimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
