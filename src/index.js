import { of, from, fromEvent, interval } from "rxjs";
import { map, pluck, filter, reduce, take } from "rxjs/operators";

const observable = interval(500).pipe(
  take(5),
  reduce((acc, value) => acc + value, 0)
);

const subscription = observable.subscribe({
  next(value) {
    console.log(value);
  },
  complete() {
    console.log("completed!");
  },
});

console.log("hello");
