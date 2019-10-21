import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Observable, Subject, of} from 'rxjs';
import {AuthService} from '../auth.service';

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
  private returnUrl: any;

  loginForm: FormGroup;
  loading = false;
  isLoggedIn$: Observable<boolean>;

  constructor(
    private cdr: ChangeDetectorRef,
    private matSnackBar: MatSnackBar,
    private router: Router,
    private activeRouter: ActivatedRoute,
    private fb: FormBuilder,
    private auth: AuthService,
  ) {}

  ngOnInit(): void {
    this.initLoginForm();
  }
  ngOnDestroy(): void {
    this.destroyStream$.next();
    this.loading = false;
  }

  initLoginForm() {
    this.loginForm = this.fb.group({
      email: ['admin@admin.admin', Validators.required],
      pass: ['123456', Validators.required]
    });
  }

  onSubmit() {
    this.loading = true;

    console.log(this.loginForm.value);
  }

}
