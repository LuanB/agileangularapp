import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material";

@Component({
  selector: "productbacklog",
  templateUrl: "./productbacklog.component.html",
  styleUrls: ["./productbacklog.component.css"]
})
export class ProductbacklogComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  backlogs = [
    {
      taskname: "Sprint 1",
      sprintready: "no",
      status: "In Progress",
      storypoints: 24,
      assigned: "no"
    },
    {
      taskname: "Task 1",
      sprintready: "no",
      status: "Not started",
      storypoints: 8,
      assigned: "no"
    },
    {
      taskname: "Task 2",
      sprintready: "yes",
      status: "complete",
      storypoints: 16,
      assigned: "yes"
    },
    {
      taskname: "Task 3",
      sprintready: "yes",
      status: "In Progress",
      storypoints: 0,
      assigned: "yes"
    },
    {
      taskname: "Sprint 2",
      sprintready: "yes",
      status: "In Progress",
      storypoints: 73,
      assigned: "yes"
    },
    {
      taskname: "Task 1",
      sprintready: "yes",
      status: "In Progress",
      storypoints: 7,
      assigned: "yes"
    }
  ];
}
