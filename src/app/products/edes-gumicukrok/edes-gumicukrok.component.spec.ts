import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdesGumicukrokComponent } from './edes-gumicukrok.component';

describe('EdesGumicukrokComponent', () => {
  let component: EdesGumicukrokComponent;
  let fixture: ComponentFixture<EdesGumicukrokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EdesGumicukrokComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdesGumicukrokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
