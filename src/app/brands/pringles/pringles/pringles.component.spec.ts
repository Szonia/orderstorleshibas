import { ComponentFixture, TestBed } from '@angular/core/testing';

import { pringlesComponent } from './pringles.component';

describe('PringlesComponent', () => {
  let component: pringlesComponent;
  let fixture: ComponentFixture<pringlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [pringlesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(pringlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
