import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController } from '@ionic/angular';
import {Programa} from './Programa'

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  dias: Map<string,Programa[]>
  
  constructor(private menu: MenuController) { 
    menu.enable(true, 'first');
  }

  ngOnInit() {
    this.menu.enable(true, 'first');
  }

  public openModal(){

  }  

}
