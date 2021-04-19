import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnComponent } from './furn.component';

describe('FurnComponent', () => {
  let component: FurnComponent;
  let fixture: ComponentFixture<FurnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FurnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FurnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
