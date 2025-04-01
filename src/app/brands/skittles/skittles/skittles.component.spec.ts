import { ComponentFixture, TestBed } from '@angular/core/testing';

import { skittlesComponent } from './skittles.component';

describe('SkittlesComponent', () => {
  let component: skittlesComponent;
  let fixture: ComponentFixture<skittlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [skittlesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(skittlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
