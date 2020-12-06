import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloButtonComponent } from './flo-button.component';

describe('FloButtonComponent', () => {
  let component: FloButtonComponent;
  let fixture: ComponentFixture<FloButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
