import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {
  }
  getComponents (){
    this.http.get('/components');
  }

  saveComponent(componentData){
    this.http.post('/components',componentData);
  }
  
}
