import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobTransferComponent } from './Components/job-transfer/job-transfer.component';
import { MyProcessComponent } from './Components/my-process/my-process.component';
import { SidenavComponent } from './Components/sidenav/sidenav.component';

const routes: Routes = [

  { path: '',component:JobTransferComponent},
  // { path: '', redirectTo:'myprocess' ,pathMatch:'full'},
  { path: 'myprocess', component: MyProcessComponent },
  { path: 'sidenav', component: SidenavComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
