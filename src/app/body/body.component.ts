import { Component, OnInit, NgModule } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent {
  public isCollapsed = true;

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }
}
