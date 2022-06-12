import { fromEvent } from "rxjs";
import { map, pluck } from "rxjs/operators";

const observable = fromEvent(document, "keydown").pipe(
  // map((event) => event.code)
  pluck("code")
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
