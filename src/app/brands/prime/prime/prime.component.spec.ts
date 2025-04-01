import { ComponentFixture, TestBed } from '@angular/core/testing';

import { primeComponent } from './prime.component';

describe('PrimeComponent', () => {
  let component: primeComponent;
  let fixture: ComponentFixture<primeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [primeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(primeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
