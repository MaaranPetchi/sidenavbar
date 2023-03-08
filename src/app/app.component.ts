import { Component } from '@angular/core';
 

interface sideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sidenavbar';

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data:sideNavToggle):void{
  this.screenWidth = data.screenWidth;
  this.isSideNavCollapsed = data.collapsed;

  }
}
