import { Component } from '@angular/core';

@Component({
  selector: 'app-text-display',
  templateUrl: './text-display.component.html',
  styleUrls: ['./text-display.component.css']
})
export class TextDisplayComponent {
  texts: string[] = ['Text 1', 'Text 2', 'Text 3'];
  visibility: boolean[] = [true, true, true];

  toggleVisibility(index: number): void {
    this.visibility[index] = !this.visibility[index];
  }
}
