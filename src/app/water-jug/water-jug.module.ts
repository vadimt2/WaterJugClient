import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaterJugsComponent } from './water-jugs/water-jugs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material-module.ts/material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddWaterJugComponent } from './add-water-jug/add-water-jug.component';
import { HttpClientModule } from '@angular/common/http';
import { WaterJugItemComponent } from './water-jug-item/water-jug-item.component';
const routes: Routes = [
  {
    path: '',
    component: WaterJugsComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  exports: [RouterModule],
  declarations: [WaterJugsComponent, AddWaterJugComponent, WaterJugItemComponent],
})
export class WaterJugModule {}
