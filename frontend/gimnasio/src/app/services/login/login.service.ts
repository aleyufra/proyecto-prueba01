import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  urlBase: string = "http://localhost:3000/api/usuario/";

  constructor(private _http: HttpClient) {

  }

  public login(username: string, password: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    let body = JSON.stringify({ username: username, password: password });
    console.log(body);

    return this._http.post(this.urlBase + 'login', body, httpOptions);
  }

  
  public logout() { //borro el vble almacenado mediante el storage 
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("perfil");
    sessionStorage.removeItem("userid");
  }

  public userLoggedIn() {
    var resultado = false;
    var usuario = sessionStorage.getItem("user");
    if (usuario != null) {
      resultado = true;
    }
    return resultado;
  }

  public userLogged(){ 
    var usuario = sessionStorage.getItem("user"); 
    return usuario; 
  }

  public idLogged(){ 
    var id = sessionStorage.getItem("userid"); 
    return id; 
  }

}
