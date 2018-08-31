import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MySlicePipe } from './pipes/my-slice.pipe';
import { MyJoinPipe } from './pipes/my-join.pipe';
import { BgDirective } from './directives/bg.directive';
import { MyIfDirective } from './directives/my-if.directive';
import { MyLoopDirective } from './directives/my-loop.directive';
import { MyDatePipe } from './pipes/my-date.pipe';
import { MySumPipe } from './pipes/my-sum.pipe';
import { MyStyleDirective } from './directives/my-style.directive';
import { MyClassDirective } from './directives/my-class.directive';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MySlicePipe,
    MyJoinPipe,
    BgDirective,
    MyIfDirective,
    MyLoopDirective,
    MyDatePipe,
    MySumPipe,
    MyStyleDirective,
    MyClassDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
