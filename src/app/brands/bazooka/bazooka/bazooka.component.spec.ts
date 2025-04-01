import { ComponentFixture, TestBed } from '@angular/core/testing';

import { bazookaComponent } from './bazooka.component';

describe('BazookaComponent', () => {
  let component: bazookaComponent;
  let fixture: ComponentFixture<bazookaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [bazookaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(bazookaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
