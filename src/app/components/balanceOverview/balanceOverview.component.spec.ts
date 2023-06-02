import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceOverviewComponent } from './balanceOverview.component';

describe('BalanceOverviewComponent', () => {
  let component: BalanceOverviewComponent;
  let fixture: ComponentFixture<BalanceOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BalanceOverviewComponent],
    });
    fixture = TestBed.createComponent(BalanceOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
