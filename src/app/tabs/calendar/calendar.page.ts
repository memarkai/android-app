import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {Programa} from './Programa'

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  dias: Map<string,Programa[]>
  
  constructor(public modalCtrl : ModalController) { }

  ngOnInit() {
  }

  public openModal(){

  }  

}
