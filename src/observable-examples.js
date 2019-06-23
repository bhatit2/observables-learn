import { Observable , fromEvent} from 'rxjs';
import { Subject } from 'rxjs/Subject';

/**
 * Observable
 */

 /**
  * 
  * @param observer Observable for click event
  */

  let ele = document.querySelector("#myBtn");
  let eventObservable = fromEvent(ele, 'click');
  let eventObservable2 = fromEvent(ele, 'click');
  eventObservable.subscribe((event : any) => console.log("event from first subscription!", event.clientX));
  eventObservable2.subscribe(event=>console.log("event from second subscription!"));


// let subscribe = (observer : any) => {
//     /**
//      * next method is used to emit the values
//      * error is used to send error
//      * complete is used to end the subscription
//      *  
//      */
//   try{
//     observer.next("emitting values !");
//     observer.next("emitting values again !");
//     observer.error("Error occured!")
//     observer.complete();
//   } catch(err){
//     observer.error("error occured!");
//   }
// }
// var observable = Observable.create(subscribe);
// //observable.subscribe(next callbk, err callbk, complete callbk)
// observable.subscribe(
//     (x:any)=> addItem(x),
//     (err: any)=>addItem(err),
//     ()=> addItem("Completed!")
//     );

//     /**
//      * A subject is a special type of observable that can also emit values which 
//      * means it is an observable and observer at the same time.
//      * 
//      */

//      /**
//       * 
//       * Subject
//       */
// function addItem(val:any) {
//     var node = document.createElement("li");
//     var textnode = document.createTextNode(val);
//     node.appendChild(textnode);
//     document.getElementById("output").appendChild(node);
// }