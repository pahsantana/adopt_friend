import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cadastros } from './cadastros.model';

@Injectable({
  providedIn: 'root'
})
export class CadastrosService {
  baseUrl = "http://localhost:8080/users"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  create(cadastro: Cadastros): Observable<Cadastros> {
    return this.http.post<Cadastros>(this.baseUrl, cadastro)
  }
}




// @Injectable({
//   providedIn: 'root'
// })
// export class ProductService {

//   baseUrl = "http://localhost:3001/products"

//   constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

//   showMessage(msg: string): void {
//     this.snackBar.open(msg, 'X', {
//       duration: 3000,
//       horizontalPosition: "right",
//       verticalPosition: "top"
//     })
//   }
  
// }
