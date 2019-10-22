import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {environment as env} from '../../environments/environment';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar'; // https://material.angular.io/components/snack-bar

import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthService} from './auth.service';
import {GoogleSignInDirective, GoogleSignOutDirective} from './google-signin.directive';


const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: '**', redirectTo: 'login', pathMatch: 'full'},
    ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    AngularFireModule.initializeApp(env.fireBase),
    MatCardModule, MatInputModule, MatButtonModule, MatSnackBarModule,
  ],
  exports: [GoogleSignInDirective, GoogleSignOutDirective, AuthComponent],
  declarations: [
    GoogleSignInDirective, GoogleSignOutDirective, AuthComponent,
    LoginComponent, RegisterComponent,
  ],
  providers: [
    AuthService, AngularFireModule, AngularFirestore, AngularFireAuth,
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {
        duration: 2500,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      }}
  ],
})

export class AuthModule {
  constructor() {
    console.log('AuthModule');
  }
}
