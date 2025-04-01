import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KivansaglistamComponent } from './kivansaglistam.component';

describe('KivansaglistamComponent', () => {
  let component: KivansaglistamComponent;
  let fixture: ComponentFixture<KivansaglistamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KivansaglistamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KivansaglistamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
