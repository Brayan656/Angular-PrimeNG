import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeModule } from './_primeModulos/prime/prime.module';
import { TablaComponent } from './pages/tabla/tabla.component';
import { FormsModule } from '@angular/forms';
import { BarraProgresoComponent } from './pages/barra-progreso/barra-progreso.component';


@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    BarraProgresoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
