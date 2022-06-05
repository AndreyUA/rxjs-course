import { Observable } from "rxjs";

const observable = new Observable((subscriber) => {
  //   subscriber.next("hello world");
  //   subscriber.error("this is error");
  //   subscriber.next("hello rxjs");
  //   subscriber.complete();
  //   subscriber.next("hello again rxjs");

  // Push sync data
  subscriber.next("sync test");

  // Push async data
  const interval = setInterval(() => {
    subscriber.next("async test");

    console.log("setInterval is alive! This is memory leak.");
  }, 1000);

  // subscriber.complete();

  return () => {
    clearInterval(interval);
  };
});

// console.log("before");

const subscription = observable.subscribe({
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

setTimeout(() => {
  subscription.unsubscribe();
}, 4000);

// console.log("after");
