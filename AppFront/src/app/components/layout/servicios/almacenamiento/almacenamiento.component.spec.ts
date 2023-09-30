import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenamientoComponent } from './almacenamiento.component';

describe('AlmacenamientoComponent', () => {
  let component: AlmacenamientoComponent;
  let fixture: ComponentFixture<AlmacenamientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlmacenamientoComponent]
    });
    fixture = TestBed.createComponent(AlmacenamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
