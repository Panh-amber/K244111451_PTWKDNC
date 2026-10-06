import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-style-component',
  standalone: false,
  templateUrl: './binding-style-component.html',
  styleUrl: './binding-style-component.css',
})
export class BindingStyleComponent {
  progressValue: number = 75; // Value range: 0 - 100
  statusColor: string = 'red'; // Color based on processing logic

  readonly rainbowColors: string[] = [
    '#ffcdd2',
    '#ffcc80',
    '#fff59d',
    '#c5e1a5',
    '#80cbc4',
    '#90caf9',
    '#9fa8da',
    '#ce93d8',
    '#ab47bc',
    '#6a1b9a',
  ];

  getRainbowColor(): string {
    const value = Math.max(0, Math.min(100, this.progressValue));
    const colorIndex = Math.min(9, Math.floor(value / 10));
    return this.rainbowColors[colorIndex];
  }

  // Check warning threshold
  isCritical(): boolean {
    return this.progressValue > 80;
  }
}