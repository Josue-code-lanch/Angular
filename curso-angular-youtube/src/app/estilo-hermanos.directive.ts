import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEstiloHermanos]'
})
export class EstiloHermanosDirective {

  constructor(private element : ElementRef) {
    this.element.nativeElement.style.background = '#ddd';
    this.element.nativeElement.style.borderRadius = '5px';
    this.element.nativeElement.style.border = '1px solid black';
    this.element.nativeElement.style.width = '200px';
    this.element.nativeElement.style.textAlign = 'center';
  }

}
