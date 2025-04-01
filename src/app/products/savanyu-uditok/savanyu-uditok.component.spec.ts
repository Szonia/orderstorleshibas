import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavanyuUditokComponent } from './savanyu-uditok.component';

describe('SavanyuUditokComponent', () => {
  let component: SavanyuUditokComponent;
  let fixture: ComponentFixture<SavanyuUditokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SavanyuUditokComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavanyuUditokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
