import { Component, OnInit, AfterViewInit } from "@angular/core";
import Chart from "chart.js";
@Component({
  selector: "sprintstatus",
  templateUrl: "./sprintstatus.component.html",
  styleUrls: ["./sprintstatus.component.css"]
})
export class SprintstatusComponent implements AfterViewInit {
  //chart = [];
  canvas: any;
  ctx: any;

  ngAfterViewInit() {
    this.canvas = document.getElementById("myChart");
    this.ctx = this.canvas.getContext("2d");
    let myChart = new Chart(this.ctx, {
      type: "pie",
      data: {
        labels: ["Problems", "In Progress", "Pending"],
        datasets: [
          {
            label: "Sprint Status",
            data: [1, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)"
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
