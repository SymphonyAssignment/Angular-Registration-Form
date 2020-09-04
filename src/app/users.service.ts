import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http';
import { User } from './user';

const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 _url="http://localhost:8080/Regform/rest/candpost";

  constructor(private http:HttpClient) { }
  register(user: User){
    return this.http.post<any>(this._url, user);
  }
}
