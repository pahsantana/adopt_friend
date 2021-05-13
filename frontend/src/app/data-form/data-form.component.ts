import jwt_decode from 'jwt-decode';
import { TokenStorageService } from './../_services/token-storage.service';
import { Router } from '@angular/router';
import { DataFormService } from './data-form.service';
import { DataForm } from './data-form.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.less']
})
export class DataFormComponent implements OnInit {

  constructor(private dataFormService: DataFormService, private router: Router, private tokenStorage: TokenStorageService) { }

  dataForm: DataForm = {
    name: '',
    age: null,
    city: '',
    size: '',
    gender: '',
    breed: '',
    weight: null,
    vaccine: false,
    castration: false,
    microchip: false,
    url: '',
    description: ''
  }
  isLoggedIn = false;
  currentUser: any;
  decoded: any;

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.currentUser = this.tokenStorage.getUser();
      var tokenDec = this.currentUser.token
      this.decoded = jwt_decode(tokenDec);
    }
  }
  createCadastroPet(): void {
    this.dataFormService.create(this.dataForm).subscribe(() => {
      this.router.navigate(['/'])
    })
  }
}
