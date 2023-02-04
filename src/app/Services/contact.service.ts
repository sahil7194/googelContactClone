import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactList = [
    {
      id: 1,
      "first_name": "test users",
      "mobile_number": 1234567810,
      "email": 'test@user.com',
      "label_id": 1,
      "profile_url": "https://i.pravatar.cc/150?img=1"
    },
    {
      id: 2,
      "first_name": "testing",
      "mobile_number": 1234567820,
      "email": 'test2@user.com',
      "label_id": 1,
      "profile_url": "https://i.pravatar.cc/150?img=2"
    },
    {
      id: 3,
      "first_name": "hello",
      "mobile_number": 1234567830,
      "email": 'test3@user.com',
      "label_id": 1,
      "profile_url": "https://i.pravatar.cc/150?img=3"
    },
    {
      id: 4,
      "first_name": "user",
      "mobile_number": 1234567840,
      "email": 'test4@user.com',
      "label_id": 1,
      "profile_url": "https://i.pravatar.cc/150?img=4"
    },
    {
      id: 5,
      "first_name": "abcd",
      "mobile_number": 1234567850,
      "email": 'test5@user.com',
      "label_id": 1,
      "profile_url": "https://i.pravatar.cc/150?img=5"
    },
    {
      id: 6,
      "first_name": "abce",
      "mobile_number": 1234567860,
      "email": 'test6@user.com',
      "label_id": 1,
      "profile_url": "https://i.pravatar.cc/150?img=6"
    },
    {
      id: 7,
      "first_name": "abcf",
      "mobile_number": 1234567870,
      "email": 'test7@user.com',
      "label_id": 1,
      "profile_url": "https://i.pravatar.cc/150?img=7"
    },
    {
      id: 8,
      "first_name": "abcg",
      "mobile_number": 1234567880,
      "email": 'test8@user.com',
      "label_id": 1,
      "profile_url": "https://i.pravatar.cc/150?img=8"
    },
    {
      id: 9,
      "first_name": "abce",
      "mobile_number": 1234567890,
      "email": 'test9@user.com',
      "label_id": 1,
      "profile_url": "https://i.pravatar.cc/150?img=9"
    },{
      id: 10,
      "first_name": "xyz",
      "mobile_number": 1234567100,
      "email": 'test10@user.com',
      "label_id": 1,
      "profile_url": "https://i.pravatar.cc/150?img=10"
    },
  ];


  constructor(private fb: FormBuilder) { }

  private basicForm: FormGroup = this.fb.group({
    id: new FormControl(''),
    profile_url: new FormControl(''),
    first_name: new FormControl('', [Validators.required]),
    email: new FormControl(''),
    mobile_number: new FormControl('', Validators.required),
    label_id: new FormControl(''),
  });

  fetchAll() {
    return this.contactList;
  }

  createBasicForm() {
    return this.basicForm;
  }

  createContact(contact: any) {
    this.contactList.push(contact);
  }

  findContactById(id: number) {
    return this.contactList.filter(contact => contact.id === id)[0];
  }

  deleteContactById(id: number) {
    return this.contactList.filter(contact => contact.id != id);
  }

  updateContact(contactId:number,formData:any)
  {
    const contactIndex = this.contactList.findIndex(c => c.id === contactId);
    this.contactList[contactIndex] = formData;
  }

  deleteContact(contactId:number)
  {
    const objWithIdIndex = this.contactList.findIndex((obj) => obj.id === contactId);
    return this.contactList.splice(objWithIdIndex, 1);
  }
}
