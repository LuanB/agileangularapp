import { Component, OnInit } from "@angular/core";
//import { ToastrService } from "ngx-toastr";
import { Observable, interval, fromEvent } from "rxjs";
import { takeWhile, tap, switchMap, mapTo } from "rxjs/operators";
//import { ToastrComponent } from "../toastr/toastr.component";
// import { NgModule } from "@angular/core";
import { RoundProgressModule } from "angular-svg-round-progressbar";

@Component({
  selector: "agilemeetingtimer",
  templateUrl: "./agilemeetingtimer.component.html",
  styleUrls: ["./agilemeetingtimer.component.css"]
})
export class AgilemeetingtimerComponent implements OnInit {
  max = 1;
  current = 0;
  //  toast: ToastrComponent;

  //constructor(private tostr: ToastrService) {}
  constructor() {}
  ngOnInit() {}

  start() {
    const myinterval = interval(100)
      .pipe(
        takeWhile(_ => !this.isFinished),
        tap(i => (this.current += 0.00167))
      )
      .subscribe();

    //   const myelement = document.getElementById("my-element");
    //
    //   //(click)...3s...'Hello I made it!'...(click)...2s(click)...
    //   const source = fromEvent(myelement, "click");
    //   const subscribe = source.subscribe(val => {
    //     this.tostr.success(
    //       "Daily Agile Meeting Scrum",
    //       "agileQuestions[curNewsIndex]"
    //     );
    //     //   this.tostr.success(
    //     //     "Daily Agile Meeting Scrum",
    //     //     "agileQuestions[curNewsIndex]"
    //     //   );
    //     // }
    //   });
  }

  finish() {
    this.current = this.max;
  }

  reset() {
    this.current = 0;
  }
  get maxVal() {
    return isNaN(this.max) || this.max < 0.1 ? 0.1 : this.max;
  }

  get currentVal() {
    return isNaN(this.current) || this.current < 0 ? 0 : this.current;
  }

  get isFinished() {
    return this.currentVal >= this.maxVal;
  }
}
