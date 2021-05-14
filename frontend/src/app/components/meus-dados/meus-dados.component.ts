import { Router } from '@angular/router';
import { Cadastros } from './../cadastros/cadastros.model';
import { CadastrosService } from './../cadastros/cadastros.service';
import jwt_decode from 'jwt-decode';
import { TokenStorageService } from './../../_services/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { DataForm } from 'src/app/data-form/data-form.model';

@Component({
  selector: 'app-meus-dados',
  templateUrl: './meus-dados.component.html',
  styleUrls: ['./meus-dados.component.less']
})
export class MeusDadosComponent implements OnInit {

  isLoggedIn = false;
  currentUser: any;
  decoded: any;
  cadastros: Cadastros;


  constructor(private tokenStorage: TokenStorageService, private cadastrosService: CadastrosService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.currentUser = this.tokenStorage.getUser();
      var tokenDec = this.currentUser.token
      this.decoded = jwt_decode(tokenDec);
    }
  }
  updateUser(): void {
    this.cadastrosService.update(this.cadastros).subscribe(() => {
      this.router.navigate(["/login"])
    })
  }

  deleteUser(): void {
    this.cadastrosService.delete().subscribe(() => {
      this.logout();
      this.router.navigate(["/"]);
      this.cadastrosService.showMessage('User excluído com sucesso');
    })
  }

  logout(): void {
    this.tokenStorage.signOut();
    window.location.reload();
  }

}
