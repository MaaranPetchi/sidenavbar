import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BodyComponent } from './Components/body/body.component';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import { MyProcessComponent } from './Components/my-process/my-process.component';
import { JobHistoryComponent } from './Components/job-history/job-history.component';
import { JobTransferComponent } from './Components/job-transfer/job-transfer.component'
@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    MyProcessComponent,
    JobHistoryComponent,
    JobTransferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
