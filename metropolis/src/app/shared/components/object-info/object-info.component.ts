import { Component, Input, OnChanges } from '@angular/core';
import { IntroHardcoded } from '../../data/intro.data';

@Component({
  selector: 'app-object-info',
  templateUrl: './object-info.component.html',
  styleUrls: ['./object-info.component.scss']
})
export class ObjectInfoComponent implements OnChanges {

  @Input() infoPanel: any;

  absoluteAssetsPath = '../../../../assets/';
  title = IntroHardcoded.name;
  description = IntroHardcoded.description?.text;
  image = '';

  width = 330;

  ngOnChanges() {
    if (this.infoPanel) {
      this.title = this.infoPanel.name ? this.infoPanel.name : this.infoPanel.data.name
      this.description = this.infoPanel.description ? this.infoPanel.description.text : this.infoPanel.data.description.text;

      if (this.infoPanel.data?.description?.image || this.infoPanel.description?.image) {
        this.image = this.absoluteAssetsPath + this.infoPanel.data.description.image;
      } else {
        this.image = '';
      }
    }
  }

  resize() {
    this.width = 500;
  }

}
