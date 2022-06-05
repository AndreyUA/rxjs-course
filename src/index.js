import { interval, timer } from "rxjs";

const observableInterval = interval(1000);

const subscriptionInterval = observableInterval.subscribe(console.log);

const observableTimer = timer(0, 1000);

const subscriptionTimer = observableTimer.subscribe(console.log);
