import { Component, OnInit, ViewChild } from '@angular/core';

import { getComponentViewByIndex } from '@angular/core/src/render3/util';
import { getViewComponent } from '@angular/core/src/render3/discovery_utils';

export interface Mensagem{
  userId:number,
  text:string,
  time:string
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})

export class ChatPage implements OnInit {

  @ViewChild('ion-content') content:any;

  myId:Number = 1;
  private messages:Object[] = [];
  message: string = "";

  constructor() { }

  ngOnInit() {
    
    var mensagem:Object = new Object();

    mensagem["text"] = "mensagem";
    mensagem['userId'] = 1;
    mensagem['time'] = '18:30'
  
    var mensagem1:Object = new Object();

    mensagem1["text"] = "mensagem";
    mensagem1['userId'] = 2;
    mensagem1['time'] = '18:30'
  
    var mensagem2:Object = new Object();

    mensagem2["text"] = "mensagem";
    mensagem2['userId'] = 1;
    mensagem2['time'] = '18:30'
  
    this.messages.push(mensagem);
    this.messages.push(mensagem1);
    this.messages.push(mensagem2);
  
  }

  sendMessage(){
    if(this.message == ""){
    }else{
      var msg:Object = new Object()
      msg["text"] = this.message
      msg['userId'] = this.myId;
      msg['time'] = '18:30'
      this.messages.push(msg);
      
    }
  }
  input(){
   //document.getElementById("messagesContent").scrollToBottom();
    this.message = "";
  }


}
