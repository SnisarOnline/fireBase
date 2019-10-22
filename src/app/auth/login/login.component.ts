import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable, Subject, of} from 'rxjs';
import {AuthService} from '../auth.service';
import Item = firebase.analytics.Item;
import {AngularFireAuth} from '@angular/fire/auth';

const DEMO_PARAMS = {
  EMAIL: 'admin@gmail.com',
  PASSWORD: '123456'
};

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit, OnDestroy {

  private destroyStream$ = new Subject<void>();
  loading = false;
  // private returnUrl: any;
  //
  // loginForm: FormGroup;
  // isLoggedIn$: Observable<boolean>;

  users: Observable<any[]>;
  private itemDoc: AngularFirestoreDocument<Item>;

  constructor(
    private cdr: ChangeDetectorRef,
    private matSnackBar: MatSnackBar,
    private router: Router,
    private activeRouter: ActivatedRoute,
    private fb: FormBuilder,
    private auth: AuthService,

    private afs: AngularFirestore,
    private afAuth: AngularFireAuth
  ) {}

  ngOnInit(): void {
    // this.users = this.afs.collection('users').valueChanges();
    // this.itemDoc = this.afs.doc<Item>('users/1');
    //
    // console.log('users', this.users);
    // console.log('itemDoc', this.itemDoc);


  }
  ngOnDestroy(): void {
    this.destroyStream$.next();
    this.loading = false;
  }

  // initLoginForm() {
  //   // this.loginForm = this.fb.group({
  //   //   email: ['admin@admin.admin', Validators.required],
  //   //   pass: ['123456', Validators.required]
  //   // });
  // }
  //
  // onSubmit() {
  //   // this.loading = true;
  //
  //   // console.log(this.loginForm.value);
  // }

}
