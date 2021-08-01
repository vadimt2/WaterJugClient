import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-water-jug-item',
  templateUrl: './water-jug-item.component.html',
  styleUrls: ['./water-jug-item.component.scss']
})
export class WaterJugItemComponent implements OnInit {
  @Input() step: string;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
