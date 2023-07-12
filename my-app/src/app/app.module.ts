import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdivinaComponent } from './components/adivina/adivina.component';
import { DniComponent } from './components/dni/dni.component';
import { PerroComponent } from './components/perro/perro.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CadenaComponent } from './components/cadena/cadena.component';
import { ChuckComponent } from './components/chuck/chuck.component';
import { CdTimerModule } from 'angular-cd-timer';
import { RestaurantesComponent } from './components/restaurantes/restaurantes.component';
import { FormularioRestauranteComponent } from './components/formulario-restaurante/formulario-restaurante.component';


@NgModule({
  declarations: [
    AppComponent,
    AdivinaComponent,
    DniComponent,
    PerroComponent,
    CadenaComponent,
    ChuckComponent,
    RestaurantesComponent,
    FormularioRestauranteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CdTimerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
