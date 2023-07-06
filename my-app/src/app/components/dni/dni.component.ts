import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dni',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css']
})
export class DniComponent implements OnInit {

  //readonly pq es constante
//static es un atributo de la clase
//para cada etiqueta/instancia, no cambia
static readonly SECUENCIA_LETRAS_DNI:string = "TRWAGMYFPDXBNJZSQVHLCKE";

numdni:string;
letra:string;

  constructor() { 
    this.numdni='';
    this.letra='';
  }

  //TODO: completar el ejercicio, para que funcione
  //e informe de la letra del dni introducido


  ngOnInit(): void {
    //hago el casting de Element (etiqueta genérica)  HtmlInputElement
    let inputSeleccionado : HTMLInputElement = <HTMLInputElement> document.querySelector(' [name="prefijo"]:checked');
    console.log(inputSeleccionado.value);
  }

  calcularLetra() : void
  {

    let numdni:number=0;
    let inputSeleccionado : HTMLInputElement = <HTMLInputElement> document.querySelector(' [name="prefijo"]:checked');
    console.log(inputSeleccionado.value);
    if (inputSeleccionado.value!="sin") 
    {
      //estoy en el caso extranjero , recalculo el dni
       let dnistrin:string = inputSeleccionado.value + this.numdni;
       numdni = parseInt(dnistrin);
    } 
    else
    {
      numdni = parseInt(this.numdni);
    }
    console.log(`El número introducido es  ${this.numdni}`);
    //Integer numero = java
    let resto:number =  numdni%23;
    this.letra = DniComponent.SECUENCIA_LETRAS_DNI.charAt(resto);
    console.log("la letra es " + this.letra);
  }

}
