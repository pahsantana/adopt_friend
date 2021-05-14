import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cadastros } from './cadastros.model';

@Injectable({
  providedIn: 'root'
})
export class CadastrosService {
  baseUrl = "http://localhost:8080"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  create(cadastro: Cadastros): Observable<Cadastros> {
    return this.http.post<Cadastros>(`${this.baseUrl}/users`, cadastro)
  }

  update(cadastro: Cadastros): Observable<Cadastros> {
    const url = `${this.baseUrl}/users`
    return this.http.put<Cadastros>(url, cadastro);
  }

  delete(): Observable<Cadastros> {
    const url = `${this.baseUrl}/users`
    return this.http.delete<Cadastros>(url);
  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
}

