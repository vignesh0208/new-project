import { Component } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { AuthenticationService } from '../services/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: 'login.page.html',
    styleUrls: ['login.page.scss'],
})
export class LoginPage {
    userData: any = {};
    constructor(private googlePlus: GooglePlus, private authService: AuthenticationService) {}

    // googleSignIn() {
    //     this.googlePlus.login({})
    //     .then(result => this.userData = result)
    //     .catch(err => this.userData = `Error ${JSON.stringify(err)}`);
    // }

    loginUserNormal() {
        var result = {
            "userId": "001",
            "userName": "vignesh"
        }
        this.authService.login(result)
    }

    loginUser(){
        this.googlePlus.login({})
        .then(result => {
            this.userData = result; 
            this.authService.login(result)
        })
        .catch(err => this.userData = `Error ${JSON.stringify(err)}`);
        
    }
}
