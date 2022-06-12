import { of, from, fromEvent } from "rxjs";
import { map, pluck, filter } from "rxjs/operators";

const observable = fromEvent(document, "keydown").pipe(
  // map((event) => (event.code === "Space" ? event.code : null))
  pluck("code"),
  filter((value) => value === "Space")
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
