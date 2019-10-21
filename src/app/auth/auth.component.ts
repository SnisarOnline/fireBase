import {Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, ViewEncapsulation} from '@angular/core';

import {Subject} from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class AuthComponent implements OnInit, OnDestroy {

  private destroyStream$ = new Subject<void>();

  constructor(
    private cdr: ChangeDetectorRef,
  ) {}


  ngOnInit(): void {}

  ngOnDestroy() {
    this.destroyStream$.next();
  }
}
