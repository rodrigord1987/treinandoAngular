import {
  Component,
  OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.css']
})
export class WellcomeComponent implements OnInit {

  // Os parâmetros de entrada são enviados no HTML do PAI
  // que está usando o componente
  @Input() userName: string;
  @Input() lastDate: Date;

  // Disparar um evento pro PAI enviando o nome do usuário
  @Output() goToCep = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  searchCep() {
    // Realiza o disparo do evento quando o usuário clica no 'Buscar CEP'
    this.goToCep.emit(this.userName);
  }

}
