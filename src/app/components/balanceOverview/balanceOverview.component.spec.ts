import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceoverviewComponent } from './balanceOverview.component';

describe('BalanceOverviewComponent', () => {
  let component: BalanceoverviewComponent;
  let fixture: ComponentFixture<BalanceoverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BalanceoverviewComponent],
    });
    fixture = TestBed.createComponent(BalanceoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
