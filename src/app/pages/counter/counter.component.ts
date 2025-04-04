import {Component} from "@angular/core";

@Component({
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  counter = 10;

  incrementOne() {
    this.counter++;
  }

  decrementOne() {
    this.counter--;
  }

  resetCounter() {
    this.counter = 10;
  }
}
