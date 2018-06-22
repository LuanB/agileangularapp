import {
  Component,
  OnInit,
  AfterViewInit,
  EventEmitter,
  ElementRef
} from "@angular/core";
//import { ToastrService } from "ngx-toastr";
import { Observable, interval, fromEvent, pipe } from "rxjs";
import { takeWhile, tap, switchMap, mapTo } from "rxjs/operators";
//import { ToastrComponent } from "../toastr/toastr.component";
// import { NgModule } from "@angular/core";
import { RoundProgressModule } from "angular-svg-round-progressbar";
import { NgForm } from "@angular/forms";

@Component({
  selector: "agilemeetingtimer",
  templateUrl: "./agilemeetingtimer.component.html",
  styleUrls: ["./agilemeetingtimer.component.css"]
})
export class AgilemeetingtimerComponent implements OnInit, AfterViewInit {
  max = 1;
  current = 0;
  //  toast: ToastrComponent;

  // .pipe(takeWhile(_ => !this.isFinished), tap(i => (this.current += 0.00167)))
  // .subscribe();

  // swtich map funtion to all reset of timer when user clicks start btn again. Pipe is needed in Angular 6.
  constructor(private elementRef: ElementRef) {}
  ngOnInit() {}
  ngAfterViewInit() {
    const StartBtnClickObs1 = fromEvent(
      document.getElementById("startbtn"),
      "click"
    );

    const intervalObs2 = interval(100).pipe(
      takeWhile(_ => !this.isFinished),
      tap(i => (this.current += 0.00167))
    );

    StartBtnClickObs1.pipe(switchMap(event => intervalObs2)).subscribe(x =>
      console.log(this.current)
    );
  }

  startInterval() {
    this.current = 0;

    //const myinterval = interval(100);
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
