import { MatSnackBar } from '@angular/material/snack-bar';
import { Cadastros } from './../components/cadastros/cadastros.model';
import { TokenStorageService } from './../_services/token-storage.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { DataForm } from './data-form.model'
import jwt_decode from 'jwt-decode';

const USER_KEY = 'auth-user'

@Injectable({
  providedIn: 'root'
})
export class DataFormService {

  baseUrl = "http://localhost:8080";

  pet = new BehaviorSubject<any>(null)

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
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
  readById(id: string): Observable<DataForm> {
    const url = `${this.baseUrl}/pets/${id}`
    return this.http.get<DataForm>(url);
  }
  update(dataForm: DataForm): Observable<DataForm> {
    const url = `${this.baseUrl}/pets/${dataForm.id}`
    return this.http.put<DataForm>(url, dataForm);
  }

  getUserById(id: number): Observable<any> {
    const url = `${this.baseUrl}/user/${id}`
    return this.http.get<any>(url);
  }

  delete(id: string): Observable<DataForm> {
    const url = `${this.baseUrl}/pets/${id}`
    return this.http.delete<DataForm>(url);
  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

}