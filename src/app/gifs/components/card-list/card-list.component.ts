import { Component } from '@angular/core';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
})
export class CardListComponent {
  public gifsList: string[] = ['Primero', 'Segundo', 'Tercero', 'Cuarto'];
}
