import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInstaComponent } from './login-insta.component';

describe('LoginInstaComponent', () => {
  let component: LoginInstaComponent;
  let fixture: ComponentFixture<LoginInstaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginInstaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginInstaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
