import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-dragger',
  standalone: true,
  imports: [],
  templateUrl: './dragger.component.html',
  styleUrl: './dragger.component.scss'
})
export class DraggerComponent {
  @Output() onMoveDownOnDragger = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('mousedown', ["$event"]) onMouseDown(e: any) {
    this.onMoveDownOnDragger.emit(true);
    console.log(e.clientX);
  }
}
