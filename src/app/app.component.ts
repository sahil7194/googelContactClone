import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SideNavServiceService } from './Services/side-nav-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GoogleContact';

  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(private sideNavService: SideNavServiceService) {
  }

  ngOnInit() {
   this.sideNavService.sideNavToggleSubject.subscribe(()=> {
      if(this.sidenav){

        this.sidenav.toggle();
      }
    });
  }


}
