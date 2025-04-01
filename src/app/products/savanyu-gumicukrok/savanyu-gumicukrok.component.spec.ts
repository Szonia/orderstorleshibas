import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavanyuGumicukrokComponent } from './savanyu-gumicukrok.component';

describe('SavanyuGumicukrokComponent', () => {
  let component: SavanyuGumicukrokComponent;
  let fixture: ComponentFixture<SavanyuGumicukrokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SavanyuGumicukrokComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavanyuGumicukrokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
