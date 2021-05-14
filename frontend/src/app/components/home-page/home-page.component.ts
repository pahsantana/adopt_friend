import { Component, OnInit } from '@angular/core';
import { UserService } from './../../_services/user.service';
import { TokenStorageService } from './../../../app/_services/token-storage.service';
import { AuthService } from './../../../app/_services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {
  content?: string;
  isLoggedIn = false;
 

  constructor(private userService: UserService, private tokenStorageService: TokenStorageService, private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}
