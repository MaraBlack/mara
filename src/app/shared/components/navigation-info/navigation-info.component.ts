import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { enumToMap } from '../../misc/utils';
import { AcctivityTypes } from '../../models/acctivity-types.mode';

interface NavItem {
  value: string;
  isActive: boolean;
}

@Component({
  selector: 'app-navigation-info',
  templateUrl: './navigation-info.component.html',
  styleUrls: ['./navigation-info.component.scss']
})
export class NavigationInfoComponent implements OnInit {
  navList: NavItem[] = [];
  @Output() navItemClicked: EventEmitter<string> = new EventEmitter();

  absoluteAssetsPath = '../../../../assets/';

  constructor() {
    const values = Object.values(AcctivityTypes)

    values.forEach((value) => {
      const obj: NavItem = {
        value: value.toLowerCase(),
        isActive: false
      }
      this.navList.push(obj)
    })
  }

  ngOnInit(): void {
  }

  onNavClick(item: NavItem) {
    this.setToActive(item);
    this.navItemClicked.emit(item.value)
    // select buildings

  }

  setToActive(item: NavItem) {
    this.navList.forEach((item: NavItem) => {
      item.isActive = false;
    })
    item.isActive = true
  }
}
