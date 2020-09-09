import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'app/providers/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (
     private _authService: AuthService,
     private router: Router
  ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
      if (!this._authService.isLoggedIn()) {
        this.router.navigateByUrl('welcome');
        this._authService.deleteToken();
        return false
      }
    return true;
  }
  
}
