import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-simple-demo',
  templateUrl: './simple-demo.component.html',
  styleUrls: ['./simple-demo.component.scss']
})
export class SimpleDemoComponent {
  public selected = false;

  @Input()
  public rotation: [x: number, y: number, z: number] = [0, 0, 0];
  @Input()
  public position: [x: number, y: number, z: number] = [0, 0, 0];
}
