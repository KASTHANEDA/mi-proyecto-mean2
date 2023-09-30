import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaritimoComponent } from './maritimo.component';

describe('MaritimoComponent', () => {
  let component: MaritimoComponent;
  let fixture: ComponentFixture<MaritimoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaritimoComponent]
    });
    fixture = TestBed.createComponent(MaritimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
