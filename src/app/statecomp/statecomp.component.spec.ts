import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatecompComponent } from './statecomp.component';

describe('StatecompComponent', () => {
  let component: StatecompComponent;
  let fixture: ComponentFixture<StatecompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatecompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
