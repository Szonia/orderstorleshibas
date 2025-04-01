import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsiposChipsekComponent } from './csipos-chipsek.component';

describe('CsiposChipsekComponent', () => {
  let component: CsiposChipsekComponent;
  let fixture: ComponentFixture<CsiposChipsekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CsiposChipsekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsiposChipsekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
