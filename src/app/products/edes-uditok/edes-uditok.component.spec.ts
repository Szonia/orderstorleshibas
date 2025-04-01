import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdesUditokComponent } from './edes-uditok.component';

describe('EdesUditokComponent', () => {
  let component: EdesUditokComponent;
  let fixture: ComponentFixture<EdesUditokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EdesUditokComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdesUditokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
