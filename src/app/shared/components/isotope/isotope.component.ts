import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-isotope',
  templateUrl: './isotope.component.html',
  styleUrls: ['./isotope.component.scss']
})
export class IsotopeComponent {

  @Output() genero = new EventEmitter();

  goFilter(genero: string) {
    console.log('Genero Emitido:', genero);
    this.genero.emit(genero);
  }

}
