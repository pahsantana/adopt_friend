import { Component, OnInit } from '@angular/core';
import { labels } from './labels';

@Component({
  selector: 'app-quem-somos',
  templateUrl: './quem-somos.component.html',
  styleUrls: ['./quem-somos.component.less']
})
export class QuemSomosComponent implements OnInit {

  howWeAre: string = labels.howWeAre;
  whatWeDo: string = labels.whatWeDo;
  projects: string = labels.projects;

  constructor() { }

  ngOnInit(): void {
  }

}
