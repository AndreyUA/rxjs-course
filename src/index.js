import { Observable } from "rxjs";

const observable = new Observable((subscriber) => {
  subscriber.next("hello world");
});

observable.subscribe({
  next: (value) => {
    console.log(value);
  },
});
