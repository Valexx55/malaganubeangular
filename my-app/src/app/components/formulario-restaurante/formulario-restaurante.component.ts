import { Component, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/models/restaurante';

@Component({
  selector: 'app-formulario-restaurante',
  templateUrl: './formulario-restaurante.component.html',
  styleUrls: ['./formulario-restaurante.component.css']
})
export class FormularioRestauranteComponent implements OnInit {

  //representa el nuevo restaurante
  //está conectado al formulario
  restaurante:Restaurante;

  constructor() {
    this.restaurante = new Restaurante();
   }

  ngOnInit(): void {
  }

  
  crearRestaurante()
  {
    console.log("enviar los datos");
  }

}
