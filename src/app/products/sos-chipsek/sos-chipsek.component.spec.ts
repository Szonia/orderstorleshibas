import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SosChipsekComponent } from './sos-chipsek.component';

describe('SosChipsekComponent', () => {
  let component: SosChipsekComponent;
  let fixture: ComponentFixture<SosChipsekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SosChipsekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SosChipsekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
