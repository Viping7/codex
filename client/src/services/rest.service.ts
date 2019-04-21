import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    var httpHeaders =new HttpHeaders({
      'content-type' : 'multipart/form-data'
    });
    return this.http.post('/components',componentData,{headers:httpHeaders});
  }
  getComponentById(id){
    return this.http.get(`/component/${id}`);

  }
  
}
