import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from './couter.actions';
import { Observable } from 'rxjs';

@Component({
  selector: '',
  imports: [AsyncPipe],
  template: `
    <h1>Counter: {{ count$ | async }}</h1>
    <button (click)="increment()">Increments</button>
  `,
})
export class createAppComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }

  increment() {
    this.store.dispatch(incrementCounter());
  }

  decrement() {
    this.store.dispatch(decrementCounter());
  }

  reset() {
    this.store.dispatch(resetCounter());
  }
}
