// Import stylesheets
import './style.css';
screenLog.init()

import { filter, withLatestFrom, map, shareReplay, debounceTime, skip, take, concat, merge, tap, mergeMap, startWith, bufferWhen, buffer, zip, delay, delayWhen, partition, sample,mergeAll, switchAll, switchMap, concatMap } from 'rxjs/operators';
import { interval, pipe, from, of, Observable, fromEvent, combineLatest, timer } from 'rxjs';

attempt0();

function attempt0() {

  console.log('Hello!')

  //TP1
  const obs1$ = from(['A', 'B', 'C']);
  obs1$.subscribe(
    data => console.log('>'+data)
  )

  //TP2
  //let obs2$ = interval(1000);
  //obs2$.subscribe(v => console.log('i>'+v));

  //TP3
  /*from([1,2,3,4]).pipe(
    filter(x => x > 2),
    filter(w => w > 3)
  ).subscribe(val => console.log("v3 >"+val));

  //TP4
  from([1,2,3,4]).pipe(
    delay(5000)
  ).subscribe(val => console.log("v4 >" +val));

  //TP5
  const post$:Observable<any> = of(
    {
      title: 'Simulating HTTP request',
      content: 'This is off the hook !!!'
    }
  ).pipe(delay(2000));

  post$.subscribe((x) => 
    console.log(x),
    (err) => console.log('error', err),
    () => console.log('end')
  );*/

  //TP6: implement MergeMap
  /*const obs3$ = from(['A','B','C']).pipe(delay(100));
  const obs4$ = from([1,2,3]).pipe(delay(3000));
   
  obs3$.pipe(mergeMap( () => obs4$,     // param1 obs
                      (x,y) => ""+x+y, 2) // merge function ( x = Obs3 y = Obs4 ) => merge function (here x+y), parallel parm (2 here))
  ).subscribe(data => console.log(data));*/

  //TP7; Create Observable that emits 'Hello' and 'World' on subcription
  const hello = Observable.create(
    function(observer) {
      observer.next('Hello');
      observer.next('World');
      observer.complete();
    }
  );

  hello.subscribe(
    value => console.log(value),
    err => {},
    () => console.log("the end")
  );

//TP8  
  const fakeObservable$ = Observable.create(obs => {
    setTimeout(() => obs.next(1), 1000);
    setTimeout(() => obs.next(2), 2000);
    setTimeout(() => obs.complete(), 3000);    
  });
  fakeObservable$.subscribe(
    val => console.log(`FO: ${val}`),
    (err) => console.log('error ', err),
    () => console.log('completed')
  );
 
  //TP9: Now let’s say there is a scenario where we have an Observable that emits an array,  
  // and for each item in the array we need to fetch data from the server.
  const getData = (param) => {
    return of(`retrieved new data with param ${param}`).pipe(delay(1000));
  }
  // using a regular map  
  from([1,2,3,4]).pipe(
    map(param => getData(param))
  ).subscribe((val: Observable<string>) => {
    val.subscribe(data => console.log(data))
  });
 
  //TP10: using map and mergeAll
  /* from([1,2,3,4]).pipe(
    map(param => getData(param)),
    mergeAll()
  ).subscribe(val => console.log(val));
  */
  
  //TP11: using mergeMap
  // map to observable and emit values
  from([1,2,3,4]).pipe(
    mergeMap(param => getData(param))
  ).subscribe(val => console.log(val));


}

  


 
