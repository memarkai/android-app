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
    return this.http.post(this.url + "/create/patient", paciente);
  }

  login(user){
    return this.http.post(this.url + "/login/", user, {responseType: 'text'}).toPromise()
    .then(data => {
      this.storage.set('token', data);
    }) 
  }

  getToken(){
    return this.storage.get('token')
  }

  getList(){
    return this.http.get(this.url+'/clinics/doctor/list/', {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNGFkZTJjY2UtMTMyYi00YTQ0LThlNDItOTUxMTJjMTU5ZGRmIn0.phcLfQqEMrIMlvNwTwPMelmcg77esPM7cXYrb5KbeEQ'
      }),
    }).toPromise()
  }
}
/*
return this.http.get(
                this.urlBackend + 'clinics/doctor/list/', {
                headers: new HttpHeaders(
                    {
                    'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNGFkZTJjY2UtMTMyYi00YTQ0LThlNDItOTUxMTJjMTU5ZGRmIn0.phcLfQqEMrIMlvNwTwPMelmcg77esPM7cXYrb5KbeEQ'
                    }
                ),
                } 
            )

*/