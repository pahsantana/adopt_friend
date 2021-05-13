import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastrosService } from './cadastros.service';
import { Cadastros } from './cadastros.model';


@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.component.html',
  styleUrls: ['./cadastros.component.less']
})
export class CadastrosComponent implements OnInit {

  constructor(private cadastrosService: CadastrosService, private router: Router) { }

  cadastros: Cadastros = {
    name: '',
    cpf: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  }

  ngOnInit(): void {


  }

  createCadastro(): void {
    this.cadastrosService.create(this.cadastros).subscribe(() => {
      this.router.navigate(['/'])
    })
  }

}