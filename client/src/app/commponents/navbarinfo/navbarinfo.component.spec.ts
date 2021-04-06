import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarinfoComponent } from './navbarinfo.component';

describe('NavbarinfoComponent', () => {
  let component: NavbarinfoComponent;
  let fixture: ComponentFixture<NavbarinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
