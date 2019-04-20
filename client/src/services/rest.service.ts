import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {
  }
  getComponents (){
    return this.http.get('/components');
  }

  saveComponent(componentData){
    return this.http.post('/components',componentData);
  }
  getComponentById(id){
    return this.http.get(`/component/${id}`);

  }
  
}
