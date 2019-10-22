import { Directive, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import '@firebase/auth';
import '@firebase/database';
import '@firebase/firestore';

@Directive({selector: '[appGoogleSignIn]'})
export class GoogleSignInDirective {

  constructor( private afAuth: AngularFireAuth ) {}

  @HostListener('click')
  onclick() {
    const provider = new firebase.auth.GoogleAuthProvider();

    provider.addScope('profile');
    provider.addScope('email');

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((itemsEvent) => console.log('itemsEvent: ', itemsEvent))
      .catch((error) => {
        console.log('error', error);

        if (error.code === 'auth/web-storage-unsupported') {
          console.log('Заблокированы сторонние куки');
        }
      });
  }
}



@Directive({selector: '[appGoogleSignOut]'})
export class GoogleSignOutDirective {

  constructor() {}

  @HostListener('click')
  onclick() {
    firebase
      .auth()
      .signOut()
      .then((itemEvent) =>  console.log('itemsEvent: ', itemEvent))
      .catch((error) => console.log('error', error));
  }
}
