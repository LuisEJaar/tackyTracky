import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild('datetime', { static: false }) datetime!: IonDatetime;

  public myDate : Date = new Date;

  constructor() {}
  highlightedDates = [
    {
      date: '2023-07-29',
      textColor: '#800080',
      backgroundColor: '#ffc0cb',
    },
    {
      date: '2023-07-28',
      textColor: '#09721b',
      backgroundColor: '#c8e5d0',
    },
    {
      date: '2023-07-25',
      textColor: 'var(--ion-color-secondary-contrast)',
      backgroundColor: 'var(--ion-color-secondary)',
    },
    {
      date: '2023-07-26',
      textColor: 'rgb(68, 10, 184)',
      backgroundColor: 'rgb(211, 200, 229)',
    },
  ];

  logDate() {
    this.datetime.confirm().then(()=> {
      console.log(this.myDate);
  })};

  editDate() {
    this.datetime.confirm().then(()=> {
      console.log("Edit to be implemented");
  })};

  viewDate() {
    this.datetime.confirm().then(()=> {
      console.log("View to be implemented");
  })};

}