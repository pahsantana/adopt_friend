import { MeusDados } from './meus-dados.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CadastrosService } from './../cadastros/cadastros.service';
import jwt_decode from 'jwt-decode';
import { TokenStorageService } from './../../_services/token-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meus-dados',
  templateUrl: './meus-dados.component.html',
  styleUrls: ['./meus-dados.component.less']
})
export class MeusDadosComponent implements OnInit {

  isLoggedIn = false;
  currentUser: any;
  decoded: any;
  cadastros = new MeusDados();

  constructor(private tokenStorage: TokenStorageService, private cadastrosService: CadastrosService, private router: Router, private route: ActivatedRoute) { }

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
      this.logout();
      this.router.navigate(["/login"])
      this.cadastrosService.showMessage('Usuário alterado com sucesso');
    })
  }

  deleteUser(): void {
    this.cadastrosService.delete().subscribe(() => {
      this.logout();
      this.router.navigate(["/"]);
      this.cadastrosService.showMessage('Usuário excluído com sucesso');
    })
  }

  logout(): void {
    this.tokenStorage.signOut();
    window.location.reload();
  }

}
