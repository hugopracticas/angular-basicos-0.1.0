import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private dbzSrvice: DbzService) { }

  ngOnInit(): void {
  }

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  // get personajes(): Personaje[]{
  //     return this.dbzSrvice.personajes;
  // }

  // agregarNuevoPersonaje( argumento: Personaje){
  //   console.log('Main page component');
  //   console.log( argumento );
  //   this.personajes.push( argumento );
  // }

  /*cambiarNombre( event: any ){
    console.log( event.target.value );
  }*/

}
