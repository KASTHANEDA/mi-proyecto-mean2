import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrestreComponent } from './terrestre.component';

describe('TerrestreComponent', () => {
  let component: TerrestreComponent;
  let fixture: ComponentFixture<TerrestreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TerrestreComponent]
    });
    fixture = TestBed.createComponent(TerrestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
