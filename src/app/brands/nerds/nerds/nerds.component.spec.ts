import { ComponentFixture, TestBed } from '@angular/core/testing';

import { nerdsComponent } from './nerds.component';

describe('NerdsComponent', () => {
  let component: nerdsComponent;
  let fixture: ComponentFixture<nerdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [nerdsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(nerdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
