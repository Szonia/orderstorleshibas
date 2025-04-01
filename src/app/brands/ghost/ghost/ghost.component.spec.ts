import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ghostComponent } from './ghost.component';

describe('GhostComponent', () => {
  let component: ghostComponent;
  let fixture: ComponentFixture<ghostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ghostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ghostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
