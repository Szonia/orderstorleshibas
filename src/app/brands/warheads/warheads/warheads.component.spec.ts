import { ComponentFixture, TestBed } from '@angular/core/testing';

import { warheadsComponent } from './warheads.component';

describe('WarheadsComponent', () => {
  let component: warheadsComponent;
  let fixture: ComponentFixture<warheadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [warheadsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(warheadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
