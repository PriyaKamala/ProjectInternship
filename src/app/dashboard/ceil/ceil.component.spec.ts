import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeilComponent } from './ceil.component';

describe('CeilComponent', () => {
  let component: CeilComponent;
  let fixture: ComponentFixture<CeilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
