import {
  Component,
  Directive,
  ViewContainerRef,
  ViewChild,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory
} from "@angular/core";

@Component({
  selector: "material-dashboard",
  templateUrl: "./material-dashboard.component.html",
  styleUrls: ["./material-dashboard.component.css"]
})
export class MaterialDashboardComponent {
  cards = [
    { title: "Product Backlog", cols: 2, rows: 1 },
    { title: "Velocity Chart", cols: 1, rows: 1 },
    { title: "Sprint Backlog", cols: 1, rows: 2 },
    { title: "Burndown Chart", cols: 1, rows: 1 },
    {
      title: "test",
      content: "<productbacklog />",
      cols: 1,
      rows: 1
    }
  ];
}
