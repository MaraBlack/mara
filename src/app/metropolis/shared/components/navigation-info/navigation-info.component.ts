import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BuildingsDataHardcoded } from '../../data/buildings.data';
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
      items: Object.keys(originalData)
        .filter(key => key !== 'empty')
        .map(key => ({
          name: key,
          isActive: false
        }))
    };
    
    const roadsObj: NavItem = {
      group: 'Roads',
      items: Object.keys(originalRoads)
        .map(key => ({
          name: `${key.split("_")[0]} nr ${key.split("_")[1]}`,
          isActive: false
        }))
    };
    
    this.navList.push(buildingsObj, roadsObj);
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
