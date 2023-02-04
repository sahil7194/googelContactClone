import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  @Input() contactData:any;

  @Output() onDeleteContact = new EventEmitter<any>();

  delete(contactId:number)
  {
    this.onDeleteContact.emit(contactId);
    console.log(contactId);
  }

}
