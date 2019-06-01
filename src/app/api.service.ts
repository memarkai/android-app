import { Injectable, Inject } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private url = "http://ec2-3-16-1-205.us-east-2.compute.amazonaws.com/api";

  constructor(
    private http: HttpClient,
    private storage: Storage) { 
  }

  cadastro(paciente){
    return this.http.post(this.url + "/create/patient",paciente);
  }

  getHeader(){
    var token:String;
    this.storage.get('token').then((data) => {
      token = data;
    }).catch(err => {
      token = null;
    })
    ;

    return new HttpHeaders({ 
    
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    
    });

  }

  login(user){
    return this.http.post(this.url + "/login/", user, {
      responseType: 'text'}
    ).toPromise()
    .then(data => {
      this.storage.set('token', data);
    }) 
  }


  

}
