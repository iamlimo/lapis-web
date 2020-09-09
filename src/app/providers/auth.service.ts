import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const url = "https://lapisapi.herokuapp.com/api";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

        constructor(private _http: HttpClient) { }
        // Function To Register
        register(body: any) {
          return this._http.post(`${url}/register`, body,  {
            observe: 'body',
            headers: new HttpHeaders().append('Content-Type', 'application/json')
          });
        }
        // Function to login 
        login(body: any) {
          return  this._http.post(`${url}/login`, body, {
            observe: 'body',
            headers: new HttpHeaders().append('Content-Type', 'application/json')
          });
        }
        // Function to validate token
          validateResetToken(token: any){
            return this._http.get(`${url}/password/find/${token}`,  {
              observe: 'body',
              headers: new HttpHeaders().append('Content-Type', 'application/json')
            })
          }
        // Function to request for password reset
        passwordResetRequest(body: any){
          return  this._http.post(`${url}/password/create`, body, {
            observe: 'body',
            headers: new HttpHeaders().append('Content-Type', 'application/json')
          });
        }
        // Reset password
        reset(body: any){
          return  this._http.post(`${url}/password/reset`, body, {
            observe: 'body',
            headers: new HttpHeaders().append('Content-Type', 'application/json')
          });
        }
        // Function to get User Details
        getUserInfo(){
          return this._http.get(`${url}/getAuthUser`,  {
            observe: 'body',    
            headers:  new HttpHeaders({
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + this.getToken()
            })
          });
        }
        // Function to update user info
        updateUserInfo(body: any) {
          return this._http.post(`${url}/updateuser`, body,  {
            observe: 'body',
            headers:  new HttpHeaders({
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + this.getToken()
            })
          });
        }
        // function to change user password 
         changePassword(body: any) {
          return this._http.post(`${url}/changepassword`, body,  {
            observe: 'body',
            headers:  new HttpHeaders({
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + this.getToken()
            })
          });
         }
        //  Function to update profile image
        // updateProfileImage(body: any) {
        //   return this._http.post(`${url}/updateprofilepicture`, body,  {
        //     observe: 'body',
        //     headers: new HttpHeaders().append('Content-Type', 'application/json')
        //   });
        //  }
        //  Function to set  Token
         setToken(token: string){
            localStorage.setItem('token', token);
         }
       //  Function to get  Token
        getToken(){
           return  localStorage.getItem('token');
        }
        //  Function to delete Token
        deleteToken(){
         return localStorage.removeItem('token');
        }
        // Function to get User Payload
        getUserPayLoad(){
          let token = this.getToken();
          if (token) {
            let userPayLoad = atob(token.split('.')[1]);
            return JSON.parse(userPayLoad)
          } else {
            return null;
          }
        }
        // Function to checek if User is logged In
        isLoggedIn() {
          let userPayLoad = this.getUserPayLoad();
          if (userPayLoad) {
            return userPayLoad.exp > Date.now() / 1000;
          } else {
            return false;
          }
        }
        // Function to get list country 
        getCountry(){
          return this._http.get("https://wft-geo-db.p.rapidapi.com/v1/geo/countries", {
            observe: 'body',    
            // headers:  new HttpHeaders({
            //   'Accept': 'application/json',
            //   'Authorization': 'Bearer ' + this.getToken()
            // })
            headers: {
              "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
              "x-rapidapi-key": "0c83a9a68emshc55a71cfc60071bp1f9a0cjsn34aed040da60"
            }
          });
        }
}
