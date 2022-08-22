import { Injectable } from '@angular/core';
import {HttpClient  } from '@angular/common/http';
import { employees } from './employees';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  getemployee() {
    throw new Error('Method not implemented.');
  }

  constructor(private http : HttpClient) { }

  url : string  = "http://localhost:3000/employees";

  getemployees(){
    return this.http.get<employees[]>(this.url);
  }
}
