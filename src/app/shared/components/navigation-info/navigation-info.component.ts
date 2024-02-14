import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { enumToMap } from '../../misc/utils';
import { AcctivityTypes } from '../../models/acctivity-types.mode';
import { BuildingsDataHardcoded } from '../../data/buildings.data';
import { BuildingObject } from '../../models/building.model';
import { RoadsDataHardcoded } from '../../data/roads.data.';

interface NavItem {
  group: string;
  items: {
    name: string;
    isActive: boolean;
  }[];
}

@Component({
  selector: 'app-navigation-info',
  templateUrl: './navigation-info.component.html',
  styleUrls: ['./navigation-info.component.scss']
})
export class NavigationInfoComponent implements OnInit {
  navList: NavItem[] = [];
  toggleNav = false;
  @Output() navItemClicked: EventEmitter<string> = new EventEmitter();

  absoluteAssetsPath = '../../../../assets/';

  constructor() {
    const originalData = BuildingsDataHardcoded;
    const originalRoads = RoadsDataHardcoded;

    const buildingsObj: NavItem = {
      group: 'District',
      items: []
    }
    const roadsObj: NavItem = {
      group: 'Roads',
      items: []
    }
    for (const key in originalData) {
      if (key !== 'empty')
        buildingsObj.items.push(
          {
            name: key,
            isActive: false
          }
        )
    }
    for (const key in originalRoads) {
      roadsObj.items.push(
        {
          name: key.split("_")[0] + ' nr ' + key.split("_")[1],
          isActive: false
        }
      )
    }

    this.navList.push(buildingsObj);
    this.navList.push(roadsObj);
  }

  ngOnInit(): void {
  }

  onNavClick(child: any) {
    this.navList.forEach(nav => {
      nav.items.forEach(element => {
        element.isActive = false;
      });
    });

    child.isActive = !child.isActive;
  }

  onToggleNav() {
    this.toggleNav = !this.toggleNav;
  }
}
