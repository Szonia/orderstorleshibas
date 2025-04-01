import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsekComponent } from './chipsek.component';

describe('ChipsekComponent', () => {
  let component: ChipsekComponent;
  let fixture: ComponentFixture<ChipsekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChipsekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipsekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
