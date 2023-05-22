import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleBarComponent } from './titleBar.component';

describe('TitlebarComponent', () => {
  let component: TitleBarComponent;
  let fixture: ComponentFixture<TitleBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitleBarComponent],
    });
    fixture = TestBed.createComponent(TitleBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
