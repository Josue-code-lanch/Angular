import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  valorContador: number = 0;

  incrementar() {
    this.valorContador ++;
  }
  decrementar() {
    this.valorContador --;
  }


  // Este es el mensaje que envia el padre al hijo.
  mensajeDelPadre: string = 'Hola hijo'

  // Este es el mensaje que recibe el padre del hijo.
  mensajeRecibido: string = '';
  recibirMensaje($event: string) {
    this.mensajeRecibido = $event;
  }
}
