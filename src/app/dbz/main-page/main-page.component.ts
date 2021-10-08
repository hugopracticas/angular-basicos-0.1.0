import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 14000
    }
  ]

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  agregarNuevoPersonaje( argumento: Personaje){
    console.log('Main page component');
    console.log( argumento );
    this.personajes.push( argumento );
  }

  /*cambiarNombre( event: any ){
    console.log( event.target.value );
  }*/

}
