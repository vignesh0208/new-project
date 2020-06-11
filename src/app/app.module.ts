import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthenticationService } from './services/authentication.service';


import { GooglePlus } from '@ionic-native/google-plus/ngx';

import { Camera } from '@ionic-native/camera/ngx'
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';
import { File } from '@ionic-native/file/ngx';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot(), NgxIonicImageViewerModule],
    providers: [
        StatusBar,
        SplashScreen,
        AuthGuardService,
        AuthenticationService,
        GooglePlus,
        Camera,
        File,
        ImagePicker,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
