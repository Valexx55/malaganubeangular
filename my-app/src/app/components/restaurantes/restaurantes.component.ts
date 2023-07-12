import { Component, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/models/restaurante';
import { RestauranteService } from 'src/app/services/restaurante.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {


  lista_restaurantes!:Array<Restaurante>;

  constructor(private restauranteService:RestauranteService) { }

  ngOnInit(): void {
    this.restauranteService.getListaRestaurantes().subscribe(
      {
        complete: () => console.log('Comunicación completada'),
        error: (errorRx) =>{
          console.error(errorRx);
        },
        next: (listaRestaurantesRx) =>
        {
          console.log('Lista Restaurantes recibida éxito');
          listaRestaurantesRx.forEach(
            rest => {
              console.log(`ID = ${rest.id} NOMBRE = ${rest.nombre}`);
            }
          );
          this.lista_restaurantes = listaRestaurantesRx;
        }
      }
    );
  }


}
