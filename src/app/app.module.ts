import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MyNavComponent } from "./my-nav/my-nav.component";
import { LayoutModule } from "@angular/cdk/layout";
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatGridListModule,
  MatMenuModule,
  MatTableModule
} from "@angular/material";
import { FirstPageComponent } from "./first-page/first-page.component";
import { SecondPageComponent } from "./second-page/second-page.component";
import { ThirdPageComponent } from "./third-page/third-page.component";
import { MaterialDashboardComponent } from "./material-dashboard/material-dashboard.component";
import { ProductbacklogComponent } from "./productbacklog/productbacklog.component";
import { VelocitychartComponent } from "./velocitychart/velocitychart.component";
import { SprintstatusComponent } from "./sprintstatus/sprintstatus.component";
import { AgilemeetingtimerComponent } from "./agilemeetingtimer/agilemeetingtimer.component";
//import { RoundProgressModule } from "angular-svg-round-progressbar";
import { ToastrComponent } from "./toastr/toastr.component";
import { RoundProgressModule } from "angular-svg-round-progressbar";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
const appRoutes: Routes = [
  { path: "ProjectSeniorTeam", component: FirstPageComponent },
  { path: "ProjectDetails", component: SecondPageComponent },
  { path: "AgileMeetingTools", component: AgilemeetingtimerComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    MaterialDashboardComponent,
    ProductbacklogComponent,
    VelocitychartComponent,
    SprintstatusComponent,
    AgilemeetingtimerComponent,
    ToastrComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatMenuModule,
    MatTableModule,
    RoundProgressModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
