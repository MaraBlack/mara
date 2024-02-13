import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationInfoComponent } from './navigation-info.component';

describe('NavigationInfoComponent', () => {
  let component: NavigationInfoComponent;
  let fixture: ComponentFixture<NavigationInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationInfoComponent]
    });
    fixture = TestBed.createComponent(NavigationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
