import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IWaterJug } from '../interfaces/water-jug.interface';

@Component({
  selector: 'app-add-water-jug',
  templateUrl: './add-water-jug.component.html',
  styleUrls: ['./add-water-jug.component.scss'],
})
export class AddWaterJugComponent implements OnInit {
  formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  minNumberAlert: string = 'Value cannot be less then 1';
  messages: Array<any> = [];

  @Output() submitedWaterJug = new EventEmitter<IWaterJug>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.formGroup = this.formBuilder.group({
      bucketX: [null, [Validators.required, Validators.min(1)]],
      bucketY: [null, Validators.required],
      mazureBuckets: [null, Validators.required],
    });
  }

  onSubmit(waterJug: IWaterJug): void {
    debugger;
    const test = this.formGroup.controls['bucketX'].errors
    if (this.formGroup.invalid) return;

    this.submitedWaterJug.emit(waterJug);
  }
}
