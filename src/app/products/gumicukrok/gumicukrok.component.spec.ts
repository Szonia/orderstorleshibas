import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GumicukrokComponent } from './gumicukrok.component';

describe('GumicukrokComponent', () => {
  let component: GumicukrokComponent;
  let fixture: ComponentFixture<GumicukrokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GumicukrokComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GumicukrokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
