import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoCanvasComponent } from './logo-canvas.component';

describe('LogoCanvasComponent', () => {
  let component: LogoCanvasComponent;
  let fixture: ComponentFixture<LogoCanvasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoCanvasComponent]
    });
    fixture = TestBed.createComponent(LogoCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
