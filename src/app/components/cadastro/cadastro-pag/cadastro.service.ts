import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cadastro } from './cadastro.model';
import {EMPTY, Observable, pipe } from 'rxjs';
import {map,catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  baseUrl = "http://localhost:3001/login"


  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  showMessage(msg: string, isError: boolean = false):void{
     this.snackBar.open(msg, 'X',{
      
      panelClass: isError ? ['errorMsg'] : ['sucessMsg']

    })
  }

  create(cadastro: Cadastro): Observable<Cadastro>{
    return this.http.post<Cadastro>(this.baseUrl, cadastro).pipe(

      map((obj) => obj),
      catchError(e => this.errorMsg(e))

    )

  }
  
  errorMsg(e:any): Observable<any>{
    console.log(e);
    this.showMessage('Erro', true)
    return EMPTY
  } 

  read(): Observable<Cadastro[]>{
    return this.http.get<Cadastro[]>(this.baseUrl).pipe(

      map((obj) => obj),
      catchError(e => this.errorMsg(e))

    )
    
  }
  
  readById(id:number): Observable<Cadastro>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Cadastro>(url).pipe(

      map((obj) => obj),
      catchError(e => this.errorMsg(e))
      
    )
  }

  updateCadastro(cadastro: Cadastro): Observable<Cadastro>{
    const url = `${this.baseUrl}/${cadastro.id}`
    return this.http.put<Cadastro>(url, cadastro).pipe(

      map((obj) => obj),
      catchError(e => this.errorMsg(e))
      
    )
  }

  deleteCadastro(id:number): Observable<Cadastro>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Cadastro>(url).pipe(

      map((obj) => obj),
      catchError(e => this.errorMsg(e))
      
    )
  }


}

