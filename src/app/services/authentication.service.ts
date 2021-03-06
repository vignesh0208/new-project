import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController, Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    authState = new BehaviorSubject(false);
    public message: any
    constructor(
        private router: Router,
        private storage: Storage,
        private platform: Platform,
        public toastController: ToastController
    ) {
        this.platform.ready().then(() => {
            this.ifLoggedIn();
        });
    }

    ifLoggedIn() {
        this.storage.get('USER_INFO').then((response) => {
            if (response) {
                this.authState.next(true);
                this.message = response
            }
        });
    }
    
    
    login(rlt) {
        console.log(rlt);
        var dummy_response = {
            user_id: rlt.userId,
            user_name: rlt.email
        };
        this.message = dummy_response
        this.storage.set('USER_INFO', dummy_response).then((response) => {
            this.router.navigate(['members']);
            this.authState.next(true);
        });
    }
    
    logout() {
        this.storage.remove('USER_INFO').then(() => {
            this.router.navigate(['login']);
            this.authState.next(false);
        });
    }
    
    isAuthenticated() {
        return this.authState.value;
    }
}
