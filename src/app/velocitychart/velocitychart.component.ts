import { Component, OnInit, AfterViewInit } from "@angular/core";
import Chart from "chart.js";

@Component({
  selector: "app-velocitychart",
  templateUrl: "./velocitychart.component.html",
  styleUrls: ["./velocitychart.component.css"]
})
export class VelocitychartComponent implements AfterViewInit {
  //chart = [];
  velocitycanvas: any;
  velocityctx: any;

  ngAfterViewInit() {
    this.velocitycanvas = document.getElementById("velocityChart");
    this.velocityctx = this.velocitycanvas.getContext("2d");
    let myChart = new Chart(this.velocityctx, {
      type: "bar",
      data: {
        labels: ["Monday", "Tuesday", "Wednesday"],
        datasets: [
          {
            label: "Velocity Chart",
            data: [9, 7, 14],
            backgroundColor: [
              "rgba(54, 162, 235, 1);opacity:0.2",
              "rgba(255, 99, 132, 1)",
              "rgba(0, 0, 206, 0.3)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: false,
        display: true
      }
    });
  }
}
