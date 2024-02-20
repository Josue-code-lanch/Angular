import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit{
  // Comunicacion entre componentes a traves de un Servicio
  nombre: string = '';

  ngOnInit(): void {
    this._servicioFamiliar.setHermanoMayor('Juan');
    this.nombre = this._servicioFamiliar.getHermanoMayor();
  }

  saludar(){
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoMenor());
  }

  preguntar(){
    console.log(this._servicioFamiliar.preguntarPorHijo())
  }

  constructor(
    private _servicioFamiliar : ServicioFamiliarService
  ){

  }
}
