import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UditokComponent } from './uditok.component';

describe('UditokComponent', () => {
  let component: UditokComponent;
  let fixture: ComponentFixture<UditokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UditokComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UditokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
