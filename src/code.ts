import { from, Observable , of, fromEvent, pipe, concat, combineLatest, merge, throwError} from 'rxjs';
import { map, take, filter, startWith, catchError } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';

const url1 = "http://jsonplaceholder.typicode.com/postsc";

  (function(){
    let clickOb = fromEvent(document.getElementById("emitBtn"), 'click');
    //4. Subscribe to browser event
    clickOb.subscribe(res=> console.log(res));
  }());
  let observable1 = of('observable 1',[1,2,3,4]);
  let observable2 = of('observable 2',[5,6,7,8]);
  let numberStream1 = of(1,2,3,4,5,6);
  let numberStream2 = of(7,8,9,10);
  let observableErr = throwError('This is an error!');
  let observer = {
    next : (res : any) => addItem(res),
    error : function (err : any){console.log(err)},
    complete : function(){console.log('completed')}
  }
function handleClick(){
  //1. Concat operator example
  concatObs();
  //2. Map operator example
  mapObs();
  //3. Filter operator example
  filterObs();
  //4. CombineLatest operator example
  CombineLatestObs();
  //5. merge observables
  mergeObs();
  //6. StarWith operator
  startWithOp();
  //7. catchError Example
  catchErr();
}


function concatObs(){
  addItem("Concat operator");
  concat( observable1,observable2).subscribe(observer);
}

function mapObs(){
  addItem("Map operator adding one to each emitted value from source 1,2,3,4,5,6")
  numberStream1.pipe(map((val: any)=>val+1))
  .subscribe(observer)
}

function filterObs(){
  addItem("Filter operator filtering and returning value greater than 2 from source 1,2,3,4,5,6")
  numberStream1.pipe(
    filter(val=>val> 2)
  ).subscribe(observer)
}

function CombineLatestObs(){
  addItem("combine Latest example");
  combineLatest(numberStream1,numberStream2).subscribe(observer);
}

function mergeObs(){
  addItem("Merge operator");
  merge(observable1, observable2).subscribe(observer);
}

function startWithOp(){
  addItem("start with 0, emit given value first");
  numberStream1.pipe(startWith(0)).subscribe(observer);
}

function catchErr(){
  addItem("Catch Error example");
  observableErr.pipe(catchError((err: any)=> of(err)))
  .subscribe(observer);
}

//attach event listener to btn click
let ele = document.querySelector("#myBtn");
ele.addEventListener('click', handleClick);

//heper function to add item in UI
function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}