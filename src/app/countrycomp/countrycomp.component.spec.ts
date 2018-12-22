import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrycompComponent } from './countrycomp.component';

describe('CountrycompComponent', () => {
  let component: CountrycompComponent;
  let fixture: ComponentFixture<CountrycompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrycompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrycompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
