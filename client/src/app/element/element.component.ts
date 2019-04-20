import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/services/rest.service';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private restService: RestService) { }
  component:any = {};
  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      if(params['id']) {
          this.restService.getComponentById(params['id'])
              .subscribe(data => this.component = data['result'].data );
      }
  })
  }

}
