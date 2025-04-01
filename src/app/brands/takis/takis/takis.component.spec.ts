import { ComponentFixture, TestBed } from '@angular/core/testing';

import { takisComponent } from './takis.component';

describe('TakisComponent', () => {
  let component: takisComponent;
  let fixture: ComponentFixture<takisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [takisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(takisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
