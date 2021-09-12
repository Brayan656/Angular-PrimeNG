import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import {ProgressBarModule} from 'primeng/progressbar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    TableModule,
    ProgressBarModule
  ],exports:[
    CommonModule,
    BrowserAnimationsModule,
    TableModule,
    ProgressBarModule
  ]
})
export class PrimeModule { }
