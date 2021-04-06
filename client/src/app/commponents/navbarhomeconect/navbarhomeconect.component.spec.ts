import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarhomeconectComponent } from './navbarhomeconect.component';

describe('NavbarhomeconectComponent', () => {
  let component: NavbarhomeconectComponent;
  let fixture: ComponentFixture<NavbarhomeconectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarhomeconectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarhomeconectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
