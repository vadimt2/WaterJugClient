import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IWaterJug } from '../interfaces/water-jug.interface';
import { WaterJugService } from '../services/water-jug.service';
@Component({
  selector: 'app-water-jugs',
  templateUrl: './water-jugs.component.html',
  styleUrls: ['./water-jugs.component.scss'],
})
export class WaterJugsComponent implements OnInit, OnDestroy {
  waterJugSubscription: Subscription;
  waterJugList: string[] = [];

  displayedColumns: string[] = ['index', 'steps'];

  constructor(private waterJugService: WaterJugService) {}
  ngOnInit() {}

  onSubmit(waterJug: IWaterJug) {
    this.waterJugSubscription = this.waterJugService
      .postWaterJug(waterJug)
      .subscribe((data) => {
        if (data) this.waterJugList = data;
      });
  }

  ngOnDestroy(): void {
    this.waterJugSubscription.unsubscribe();
  }
}
