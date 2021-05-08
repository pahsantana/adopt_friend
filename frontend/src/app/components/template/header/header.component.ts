import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent { //implements OnInit 
 
  constructor() { }

  // teste: ITest = new Test()

  ngOnInit(): void {
    
  }
}

// export interface ITest{
//   titulo: string
// }

// export class Test implements ITest{
//   constructor(
//     public titulo: string = ''
//   ){}
// }
