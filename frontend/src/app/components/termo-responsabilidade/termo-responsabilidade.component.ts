import { Component, OnInit } from '@angular/core';
import { labels } from './labels';


@Component({
  selector: 'app-termo-responsabilidade',
  templateUrl: './termo-responsabilidade.component.html',
  styleUrls: ['./termo-responsabilidade.component.less']
})
export class TermoResponsabilidadeComponent implements OnInit {

  responsibility: string = labels.responsibility;
 
 
  constructor() { }

  ngOnInit(): void {
  }

}
