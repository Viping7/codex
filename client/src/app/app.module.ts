import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ElementComponent } from './element/element.component';
import { AddNewComponent } from './add-new/add-new.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper'
const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
   url: 'http://localhost:5000/saveFiles',
   maxFilesize: 50,
   acceptedFiles: 'application/zip'
 };
  
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    ElementComponent,
    AddNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgxDropzoneModule,
    FormsModule,
    DropzoneModule
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
