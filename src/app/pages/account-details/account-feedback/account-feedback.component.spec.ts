import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountFeedbackComponent } from './account-feedback.component';

describe('AccountFeedbackComponent', () => {
  let component: AccountFeedbackComponent;
  let fixture: ComponentFixture<AccountFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
