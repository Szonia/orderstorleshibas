import { ComponentFixture, TestBed } from '@angular/core/testing';

import { fantaComponent } from './fanta.component';

describe('FantaComponent', () => {
  let component: fantaComponent;
  let fixture: ComponentFixture<fantaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [fantaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(fantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
