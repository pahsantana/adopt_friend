import { TokenStorageService } from './../_services/token-storage.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataForm } from './data-form.model'
import jwt_decode from 'jwt-decode';

const USER_KEY = 'auth-user'

@Injectable({
  providedIn: 'root'
})
export class DataFormService {

  baseUrl = "http://localhost:8080";


  constructor(private http: HttpClient) {
  }

  create(dataForm: DataForm): Observable<DataForm> {
    return this.http.post<DataForm>(`${this.baseUrl}/users/pets`, dataForm);
  }
  getToken() {
    window.sessionStorage.getItem(USER_KEY);
  }
  read(): Observable<DataForm[]> {
    return this.http.get<DataForm[]>(`${this.baseUrl}/pets`);
  }
}
