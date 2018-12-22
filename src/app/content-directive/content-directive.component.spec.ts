import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDirectiveComponent } from './content-directive.component';

describe('ContentDirectiveComponent', () => {
  let component: ContentDirectiveComponent;
  let fixture: ComponentFixture<ContentDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
