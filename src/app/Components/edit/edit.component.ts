import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ContactService } from 'src/app/Services/contact.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  basicForm: FormGroup;


  constructor(private contactService: ContactService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.createBasicForm();
    this.setBasicFormValue();

    console.log(this.basicForm, 'conatact data');
  }

  createBasicForm() {
    this.basicForm = this.contactService.createBasicForm();
  }

  submit() {

    this.contactService.updateContact(parseInt(this.activeRoute.snapshot.params['id']),this.basicForm.value)
    alert('Contact Update SuccessFully');
    this.route.navigate(['/show/'+this.activeRoute.snapshot.params['id']]);

  }

  getContactData() {

    const contactId = parseInt(this.activeRoute.snapshot.params['id']);
    return this.contactService.findContactById(contactId);

  }

  setBasicFormValue()
  {
    this.basicForm.patchValue(this.getContactData());
  }

}
