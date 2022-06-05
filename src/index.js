import { Observable } from "rxjs";

const observable = new Observable((subscriber) => {
  //   subscriber.next("hello world");
  //   subscriber.error("this is error");
  //   subscriber.next("hello rxjs");
  //   subscriber.complete();
  //   subscriber.next("hello again rxjs");
});

observable.subscribe({
  next: (value) => {
    console.log(value);
  },
  complete: () => {
    console.log("complete called!");
  },
  error: (error) => {
    console.error("ERROR ---> ", error);
  },
});
