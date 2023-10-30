import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mara';

  public rotation: [x: number, y: number, z: number] = [0, 0, 0];
  public onBeforeRender() {
    this.rotation = [0, this.rotation[2] + 0.01, this.rotation[2] + 0.01];
  }
}
