import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
declare var toastr: any;

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {
  }

  success(title: string, message?: string) {
    this.toastrOptions();
    toastr.success(title, message);
  }

  warning(title: string, message?: string) {
    this.toastrOptions();
    toastr.warning(title, message);
  }

  error(title: string, message?: string) {
    this.toastrOptions();
    toastr.error(title, message);
  }

  info(title: string, message?: string) {
    this.toastrOptions();
    toastr.info(title, message);
  }

  toastrOptions() {
    toastr.options.timeOut = 1500;
    toastr.options.extendedTimeOut = 1500;
    toastr.options.closeButton = true;
    toastr.options.closeHtml = `<button><img src="../assets/images/declined-white.svg" alt="close buttton" /></button>`;
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
