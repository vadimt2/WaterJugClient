import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterJugItemComponent } from './water-jug-item.component';

describe('WaterJugItemComponent', () => {
  let component: WaterJugItemComponent;
  let fixture: ComponentFixture<WaterJugItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterJugItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterJugItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
