import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AereroComponent } from './aerero.component';

describe('AereroComponent', () => {
  let component: AereroComponent;
  let fixture: ComponentFixture<AereroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AereroComponent]
    });
    fixture = TestBed.createComponent(AereroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
