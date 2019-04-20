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
  ngOnInit() {
    this.getComponents();
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
}
