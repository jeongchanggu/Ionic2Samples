import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ServerProvider } from '../providers/server/server';
import {LoginPageModule} from '../pages/login/login.module';
//import { HttpModule} from '@angular/http'; depreciated

import { StorageProvider } from '../providers/storage/storage';
import { MyErrorHandler } from '../classes/my-error-handler';
import { NativeStorage } from '@ionic-native/native-storage';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: MyErrorHandler},
    ServerProvider,
    StorageProvider,
    NativeStorage
  ]
})
export class AppModule {}
