import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.page.html',
  styleUrls: ['./search-page.page.scss'],
})
export class SearchPagePage implements OnInit {

  private token:String;

  constructor(
    public modalCtrl : ModalController,
    private api: ApiService) { }

  ngOnInit() {
    var pacient:Object = new Object();
    pacient["email"] = "sudo-user@markai.com";
    pacient["password"] = "YQBMXYBT";

   this.api.login(pacient);
   this.api.getToken().then((token) => {this.token = token})
   this.api.getList(this.token).then((data) => {
     console.log(data)
   } )
  }

  public openModal(){

  }    

}
