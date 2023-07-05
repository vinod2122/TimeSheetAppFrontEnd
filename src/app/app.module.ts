import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { User } from './models';
import { TokenInterceptor } from './helpers/token.interceptor';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from '../app/account/sign-up/sign-up.component';
import { LoginComponent } from '../app/account/login/login.component';
import { MaterialModule } from 'src/materilal.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { appRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule,
    appRoutingModule
  ],
  providers: [User,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
