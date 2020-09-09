import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/providers/auth.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
    userInfo: any;

    constructor(private _authService: AuthService) { }

    ngOnInit( ) {
        this._authService.getUserInfo().subscribe(userinfo => { 
            // tslint:disable-next-line: max-line-length           
            this.userInfo = userinfo['data'];
    });
    }

}
