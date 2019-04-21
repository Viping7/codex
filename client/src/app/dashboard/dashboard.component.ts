import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/services/rest.service';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  constructor(private restService : RestService, private router: Router,private modalService: NgbModal) { }
  components:any = [];
  formData;
  newComponent={
    name : "",
    description : ""
  }
  ngOnInit() {
    this.getComponents();
    this.formData = new FormData();
  }
  getComponents(){
    this.restService.getComponents().subscribe(component=>{
      this.components = component['result'].data;
    })
  }
  navigate(id){
    this.router.navigate([`/component/${id}`]);
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',size:'lg'}).result.then((result) => {
    }, (reason) => {
    });
  }
  onFilesAdded(files: File[]){
    console.log(files);
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent) => {
      const content = (e.target as FileReader).result;
        console.log(content);
       };
    this.formData.append('file',files);
       this.newComponent["file"] = new Blob(files);
   }
  uploadAndParseFiles(){
    var formData=new FormData();
    formData.append('file',this.newComponent["file"]);
    this.formData.append('name',this.newComponent.name);
    this.formData.append('description', this.newComponent.description) 
    this.restService.saveComponent(this.formData).subscribe(data=>{
      console.log(data);
    });
  }
}
