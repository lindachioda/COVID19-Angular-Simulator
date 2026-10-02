import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-nav',
  imports: [DatePipe],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav {

  date: Date = new Date()

  constructor(){}

}
