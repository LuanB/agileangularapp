import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintstatusComponent } from './sprintstatus.component';

describe('SprintstatusComponent', () => {
  let component: SprintstatusComponent;
  let fixture: ComponentFixture<SprintstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprintstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
