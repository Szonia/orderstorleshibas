import { ComponentFixture, TestBed } from '@angular/core/testing';

import { sourComponent } from './sour.component';

describe('SourComponent', () => {
  let component: sourComponent;
  let fixture: ComponentFixture<sourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(sourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
