import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  fetchAll(){
    return [
      {
        id: 1,
        "first name" : "test users",
        "mobile_ number": 1234567890,
        "profile_url":"https://i.pravatar.cc/150?img=1"
      },
      {
        id: 2,
        "first name" : "test users",
        "mobile_ number": 1234567890,
        "profile_url":"https://i.pravatar.cc/150?img=2"
      },
      {
        id: 3,
        "first name" : "test users",
        "mobile_ number": 1234567890,
        "profile_url":"https://i.pravatar.cc/150?img=3"
      },
      {
        id: 4,
        "first name" : "test users",
        "mobile_ number": 1234567890,
        "profile_url":"https://i.pravatar.cc/150?img=4"
      },
      {
        id: 5,
        "first name" : "test users",
        "mobile_ number": 1234567890,
        "profile_url":"https://i.pravatar.cc/150?img=5"
      },
    ]
  }
}
