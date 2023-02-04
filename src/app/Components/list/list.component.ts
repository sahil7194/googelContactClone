import { Component } from '@angular/core';
import { ContactService } from 'src/app/Services/contact.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  contactList : any;
  event:number;
  constructor (private contactService:ContactService){ }

  public openMenu: boolean = false;
  isOver = false;

  ngOnInit(){
    this.contactList = this.fetchAllContact();
  }
  clickMenu(){
    this.openMenu = !this.openMenu;
  }

  fetchAllContact()
  {
    return this.contactService.fetchAll();
  }

  deleteContact(id:number)
  {
     this.contactList = this.contactService.deleteContactById(id);
     console.log(this.contactList);
  }


}
