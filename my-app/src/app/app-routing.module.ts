import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DniComponent } from './components/dni/dni.component';
import { AdivinaComponent } from './components/adivina/adivina.component';
import { PerroComponent } from './components/perro/perro.component';
import { CadenaComponent } from './components/cadena/cadena.component';
import { ChuckComponent } from './components/chuck/chuck.component';

//en este array de rutas, tengo que tener una ruta path
//asociado al componente 
const routes: Routes = [
  {path:"dni", component: DniComponent},
  {path:"adivina", component: AdivinaComponent},
  {path:"perros", component: PerroComponent},
  {path:"cadena", component: CadenaComponent},
  {path:"chuck", component: ChuckComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
