import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
const url = "https://lapisapi.herokuapp.com/api";
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private _http: HttpClient, private _authService: AuthService) { }
  getAllprayers() {
    return this._http.get(`${url}/prayers`,  {
      observe: 'body',    
      headers:  new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + this._authService.getToken()
      })
    });
  } 
  getAllevents() {
    return this._http.get(`${url}/events`,  {
      observe: 'body',    
      headers:  new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + this._authService.getToken()
      })
    });
  } 
  getAllusers() {
    return this._http.get(`${url}/users`,  {
      observe: 'body',    
      headers:  new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + this._authService.getToken()
      })
    });
  } 
  getAlltestimony() {
    return this._http.get(`${url}/testimony`,  {
      observe: 'body',    
      headers:  new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + this._authService.getToken()
      })
    });
  } 
  getEventBySlug(slug: any) {
    return this._http.get(`${url}/event/${slug}`,  {
      observe: 'body',    
      headers:  new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + this._authService.getToken()
      })
    });
  } 
}