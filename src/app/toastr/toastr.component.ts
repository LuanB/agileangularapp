import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";

import { Observable, fromEvent, interval } from "rxjs";
import { switchMap, mapTo } from "rxjs/operators";

//import { interval } from "rxjs/observable/interval";
//import { fromEvent } from 'rxjs/observable/fromEvent';

//import { switchMap, mapTo } from "rxjs/operators";
//import { Observable } from "rxjs";

@Component({
  selector: "app-toastr",
  templateUrl: "./toastr.component.html",
  styleUrls: ["./toastr.component.css"]
})
export class ToastrComponent implements OnInit {
  //let button = document.querySelector("button");

  constructor(private tostr: ToastrService) {}

  ngOnInit() {}

  public runToastr() {
    //   let obs1 = Observable.fromEvent("button", "click");
    //   let obs2 = Observable.interval(1000);
    //
    const agileQuestions = [
      "What did you do yesterday",
      "What will you do today?",
      "Are there any impediments in your way?"
    ];

    let curNewsIndex = -1;
    const emitToastr = interval(3000);

    // const subscribe = emitToastr.subscribe(() => {
    //   ++curNewsIndex;
    //   if (curNewsIndex >= agileQuestions.length) {
    //     curNewsIndex = 0;
    //   }
    //
    //   this.tostr.success(
    //     "Daily Agile Meeting Scrum",
    //     agileQuestions[curNewsIndex]
    //   );
    // });

    const mydocument = document.getElementById("my-element");
    const source = fromEvent(mydocument, "click");

    const example = source.pipe(
      switchMap(val => interval(3000).pipe(mapTo("Hello, I made it!")))
    );
    //(click)...3s...'Hello I made it!'...(click)...2s(click)...
    const subscribe = example.subscribe(val => {
      this.tostr.success(
        "Daily Agile Meeting Scrum",
        agileQuestions[curNewsIndex]
      );
    });

    //
    //   obs1
    //     .switchMap(event => {
    //       return obs2;
    //     })
    //     .subscribe(value => console.log(value));
  }
}

//
// //emit value in sequence every 1 second
// const source = interval(1000);
// //output: 0,1,2,3,4,5....
// const subscribe = source.subscribe(val => console.log(val));
