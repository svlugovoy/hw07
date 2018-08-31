import {Component, OnInit} from '@angular/core';
import {User} from '../models/user';
import {Timestamp} from 'rxjs/operators/timestamp';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: User[] = [];

  testPipe: string[] = ['One', 'Two'];

  testDate = Date.now();

  numbers: number[] = [1, 2, 3, 33];

  constructor() {
  }

  ngOnInit() {
    this.users.push({name: 'Evgeniy', age: 29});
    this.users.push({name: 'Sergey', age: 19});
    this.users.push({name: 'Olexandra', age: 22});
    this.users.push({name: 'Petr', age: 40});
    this.users.push({name: 'Victor', age: 31});

    setTimeout( () => {
      this.testPipe.push('Three');
      this.numbers.push(1000);
      console.log(this.testPipe);
    }, 9000);
  }

}
