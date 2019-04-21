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
  };

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
    // this.formData.append('name',this.newComponent.name);
    // this.formData.append('description', this.newComponent.description)
    // if(this.newComponent["id"]){
    //   this.formData.append('id', this.newComponent["_id"])
    // } 
    this.restService.saveComponent(this.newComponent).subscribe(data=>{
      if(data["result"].status==200){
        let response=data["result"];
        if(response.data && response.data.id){
          this.newComponent=response.data;
          var keyArray=['id' ,'html' ,'description' , 'css' , 'ts' , 'name'];
          var count=0;
          keyArray.forEach(k=>{
            if(this.newComponent[k]){
              count++;
            }
          });
          if(count==6){
            this.router.navigate([`/component/${this.newComponent["id"]}`]);
          }
          else{
            this.restService.error("Failure" , "Please enter name and description and upload a zip file");
          }
        }
      }
    });
  }
}
