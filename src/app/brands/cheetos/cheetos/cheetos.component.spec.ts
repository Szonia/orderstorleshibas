import { ComponentFixture, TestBed } from '@angular/core/testing';

import { cheetosComponent } from './cheetos.component';

describe('CheetosComponent', () => {
  let component: cheetosComponent;
  let fixture: ComponentFixture<cheetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [cheetosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(cheetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
