import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWaterJugComponent } from './add-water-jug.component';

describe('AddWaterJugComponent', () => {
  let component: AddWaterJugComponent;
  let fixture: ComponentFixture<AddWaterJugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWaterJugComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWaterJugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
