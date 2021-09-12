import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { AccordionModule } from 'primeng/accordion';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    TableModule,
    ProgressBarModule,
    AccordionModule,
    ToastModule
  ],exports:[
    CommonModule,
    BrowserAnimationsModule,
    TableModule,
    ProgressBarModule,
    AccordionModule,
    ToastModule
  ]
})
export class PrimeModule { }
