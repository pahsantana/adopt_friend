import { TokenStorageService } from './_services/token-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  email?: string;
  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorage.getToken();
    if (this.isLoggedIn) {
      const cliente = this.tokenStorage.getUser();
      this.roles = cliente.roles;
      this.email = cliente.email;
    }
  }
  logout(): void {
    this.tokenStorage.signOut();
    window.location.reload();
  }
}