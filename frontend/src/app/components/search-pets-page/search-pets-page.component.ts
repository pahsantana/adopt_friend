import { DataFormService } from './../../data-form/data-form.service';
import { DataForm } from './../../data-form/data-form.model';
import jwt_decode from 'jwt-decode';
import { TokenStorageService } from './../../_services/token-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-pets-page',
  templateUrl: './search-pets-page.component.html',
  styleUrls: ['./search-pets-page.component.less']
})

export class SearchPetsPageComponent implements OnInit {


  pets: DataForm[]
  constructor(private dataFormService: DataFormService, private tokenStorage: TokenStorageService) { }

  isLoggedIn = false;
  currentUser: any;
  decoded: any;

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.currentUser = this.tokenStorage.getUser();
      var tokenDec = this.currentUser.token
      this.decoded = jwt_decode(tokenDec);
      this.dataFormService.read().subscribe(pets => {
        this.pets = pets
      })
    }
  }
}
