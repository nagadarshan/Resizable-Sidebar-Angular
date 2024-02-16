import { Component, HostListener } from '@angular/core';
import { LeftMainComponent } from '../left-main/left-main.component';
import { RightMainComponent } from '../right-main/right-main.component';
import { DraggerComponent } from '../dragger/dragger.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, LeftMainComponent, RightMainComponent, DraggerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  leftMainWidth: number = 200;
  mouseDownClickedOnDragger: boolean = false;
  @HostListener('mousemove', ["$event"]) onMouseMove(e: any) {
    if (this.mouseDownClickedOnDragger) {
      this.handleLeftMainWidth(e.clientX);
    }
  }
  @HostListener('mouseup', ["$event"]) onMouseUp(e: any) {
    this.mouseDownClickedOnDragger = false;
  }
  constructor() { }

  ngOnInit(): void {
  }
  onMoveDownOnDragger(status: boolean) {
    this.mouseDownClickedOnDragger = true;
  }
  handleLeftMainWidth(position: number) {
    // 64px is my width of sidebar, so doing minus to get width of left-main
    this.leftMainWidth = position - 64;
  }
}
