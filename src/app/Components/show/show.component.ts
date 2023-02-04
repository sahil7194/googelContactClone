import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/Services/contact.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  contactId:number;
  contactData:any;
  constructor (private contactServie:ContactService,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.contactId = parseInt(this.route.snapshot.params['id']);
    this.getContactData();
  }

  getContactData()
  {
    this.contactData =  this.contactServie.findContactById(this.contactId)
  }

}
