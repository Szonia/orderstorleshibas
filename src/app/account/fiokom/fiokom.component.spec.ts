import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiokomComponent } from './fiokom.component';

describe('FiokomComponent', () => {
  let component: FiokomComponent;
  let fixture: ComponentFixture<FiokomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiokomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiokomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
