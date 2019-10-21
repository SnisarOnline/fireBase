import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Observable, of, Subject} from 'rxjs';
import {AuthService} from '../auth.service';

@Component({
  selector: 'auth-register',
  templateUrl: './register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit, OnDestroy {

  private destroyStream$ = new Subject<void>();
  private returnUrl: any;

  registerForm: FormGroup;
  loading = false;
  isLoggedIn$: Observable<boolean>;

  constructor(
    private cdr: ChangeDetectorRef,
    private matSnackBar: MatSnackBar,
    private router: Router,
    private activeRouter: ActivatedRoute,
    private fb: FormBuilder,
    private auth: AuthService,
  ) {
  }

  ngOnInit() {
    // this.initRegisterForm();
  }

  ngOnDestroy(): void {
    this.destroyStream$.next();
    this.loading = false;
  }

  initRegisterForm() {
    this.registerForm = this.fb.group({
      userName: [null, Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ])],
      email: [null, Validators.compose([
        Validators.required,
        Validators.email,
        Validators.minLength(3),
        // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
        Validators.maxLength(320)
      ])],
      password: [null, Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ])],
      phone: [null, Validators.compose([
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(9)
      ])],
      confirmPassword: [null, Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ])],
      agree: [false, Validators.compose([Validators.required])]
    });
  }

  onSubmit() {
    this.loading = true;


    console.log('user :', this.registerForm.value);
  }

}
