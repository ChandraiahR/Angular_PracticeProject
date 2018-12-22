import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CaluclateServiceService {

  constructor(private httpClient : HttpClient) { }
  add(a,b){
    return a+b;
  }

 getUsers(){
   return this.httpClient.get("https://reqres.in/api/users?page=2");
 }

}
