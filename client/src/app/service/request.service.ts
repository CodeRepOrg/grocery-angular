import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

private url=''
  
  constructor(private http:HttpClient) {
    if (!environment.production) {    this.url = "http://localhost:3000";    }
   }

   card:EventEmitter<any>=new EventEmitter();

  send (input) {
    const Header = new HttpHeaders ()
    Header.append ("Content-Type",'aplication/json')
    return this.http.post(this.url+'/api/insert',input, { 
    headers:Header
    }).toPromise();
    


  }


}
