import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbaruserconectComponent } from './navbaruserconect.component';

describe('NavbaruserconectComponent', () => {
  let component: NavbaruserconectComponent;
  let fixture: ComponentFixture<NavbaruserconectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbaruserconectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbaruserconectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
