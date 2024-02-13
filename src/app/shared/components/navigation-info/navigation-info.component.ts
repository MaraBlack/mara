import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { enumToMap } from '../../misc/utils';
import { AcctivityTypes } from '../../models/acctivity-types.mode';
import { BuildingsDataHardcoded } from '../../data/buildings.data';
import { BuildingObject } from '../../models/building.model';

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
  navList: { group: string, items: string[] }[] = [];
  toggleNav = false;
  @Output() navItemClicked: EventEmitter<string> = new EventEmitter();

  absoluteAssetsPath = '../../../../assets/';

  constructor() {
    const originalData = BuildingsDataHardcoded;

    // Object.values(originalData).forEach((element: BuildingObject[]) => {
    //   element.forEach(child => {

    //   });
    // });

    for (const key in originalData) {
      const value = originalData[key];
      const navObj = {
        group: key,
        isActive: false,
        items: []
      } as { group: string, items: any[] }
      value.forEach((child: BuildingObject) => {
        navObj.items.push(child.data.name)
      });
      if (key !== 'empty') {
        this.navList.push(navObj);
      }
    }
  }

  ngOnInit(): void {
  }

  onNavClick(item: NavItem) {
    this.setToActive(item);
    this.navItemClicked.emit(item.value)
    // select buildings
  }

  onToggleNav() {
    this.toggleNav = !this.toggleNav;
  }



  setToActive(item: NavItem) {
    // this.navList.forEach((item: NavItem) => {
    //   item.isActive = false;
    // })
    // item.isActive = true
  }
}
