import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-hermano',
  templateUrl: './hermano.component.html',
  styleUrls: ['./hermano.component.css']
})
export class HermanoComponent implements OnInit{
  nombre: string = '';

  ngOnInit(): void {
    this._servicioFamiliar.setHermanoMenor('Pedro');
    this.nombre = this._servicioFamiliar.getHermanoMenor();
  }

  saludar() {
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoMayor())
  }

  preguntar(){
    console.log(this._servicioFamiliar.preguntarPorHijo())
  }

  constructor(
    private _servicioFamiliar : ServicioFamiliarService
  ){

  }
}
