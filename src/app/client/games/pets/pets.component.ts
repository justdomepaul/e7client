import { Component, OnInit } from '@angular/core';

interface UserPet {
  name: string;
  petId: number;
  ok: number;
}

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {

  petsList = [
    {
      image: 'https://image.flaticon.com/icons/png/512/616/616554.png',
      name: '狗狗'
    },
    {
      image: 'https://image.flaticon.com/icons/png/512/1530/1530857.png',
      name: '貓貓',
    },
    {
      image: '',
      name: '',
    }
  ];

  userPet: UserPet = {
    name: 'Mark',
    petId: 0,
    ok: 1,
  };

  constructor() { }

  ngOnInit() {
  }
}
