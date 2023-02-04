import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/Services/contact.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  basicForm: FormGroup;

  id = Math.floor(Math.random() * 100);
  label = Math.floor(Math.random() * 2);
  url = "https://i.pravatar.cc/?img="+this.id;


  constructor (private contactService:ContactService, private route:Router){}

  ngOnInit() {
    this.createBasicForm();
  }

  createBasicForm(){
      this.basicForm = this.contactService.createBasicForm();
  }

  submit(){
    this.contactService.createContact(this.basicForm.value);
    alert('Contact Save SuccessFully');
    this.route.navigate(['']);
    // console.log(this.basicForm.value);
  }
}
