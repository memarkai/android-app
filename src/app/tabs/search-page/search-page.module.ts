import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule, ModalController } from '@ionic/angular';
import { SearchPagePage } from './search-page.page';
import { ApiService } from 'src/app/api.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

const routes: Routes = [
  {
    path: '',
    component: SearchPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HttpModule,
    HttpClientModule
  ],
  declarations: [SearchPagePage],
  providers:[ApiService]
})

export class SearchPagePageModule {

  constructor(){

  }

}
