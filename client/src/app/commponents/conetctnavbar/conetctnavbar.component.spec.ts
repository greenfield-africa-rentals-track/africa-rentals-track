import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConetctnavbarComponent } from './conetctnavbar.component';

describe('ConetctnavbarComponent', () => {
  let component: ConetctnavbarComponent;
  let fixture: ComponentFixture<ConetctnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConetctnavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConetctnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
