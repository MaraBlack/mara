import { Component, Input, OnChanges, isDevMode  } from '@angular/core';
import { IntroHardcoded } from '../../data/intro.data';

@Component({
  selector: 'app-object-info',
  templateUrl: './object-info.component.html',
  styleUrls: ['./object-info.component.scss']
})
export class ObjectInfoComponent implements OnChanges {

  @Input() infoPanel: any;

  absoluteAssetsPath = isDevMode() ? '../../../../assets/' : 'assets/';
  title = IntroHardcoded.name;
  description = IntroHardcoded.description?.text;
  image = '';
  expandColapseSvg = this.absoluteAssetsPath + 'svg/arrow-up.svg';
  expandColapseState = false;

  width = 330;

  ngOnChanges() {
    if (this.infoPanel) {
      this.title = this.infoPanel.name ? this.infoPanel.name[0] : this.infoPanel.data.name[0]
      this.description = this.infoPanel.description ? this.infoPanel.description.text : this.infoPanel.data.description.text;

      if (this.infoPanel.data?.description?.image || this.infoPanel.description?.image) {
        this.image = this.absoluteAssetsPath + this.infoPanel.data.description.image;
      } else {
        this.image = '';
      }
    }
  }

  onExpandColapseClick() {
    this.expandColapseState = !this.expandColapseState;
    this.expandColapseSvg = this.expandColapseState ?  this.absoluteAssetsPath + 'svg/arrow-up.svg' : this.absoluteAssetsPath + 'svg/arrow-down.svg'
  }

  resize() {
    this.width = 500;
  }
}
