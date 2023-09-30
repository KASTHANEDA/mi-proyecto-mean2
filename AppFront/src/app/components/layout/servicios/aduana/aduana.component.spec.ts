import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AduanaComponent } from './aduana.component';

describe('AduanaComponent', () => {
  let component: AduanaComponent;
  let fixture: ComponentFixture<AduanaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AduanaComponent]
    });
    fixture = TestBed.createComponent(AduanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
