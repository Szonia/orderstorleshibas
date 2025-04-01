import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArizonaComponent } from './arizona.component';

describe('ArizonaComponent', () => {
  let component: ArizonaComponent;
  let fixture: ComponentFixture<ArizonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArizonaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArizonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
