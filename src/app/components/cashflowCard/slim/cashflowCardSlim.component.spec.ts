import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashflowCardSlimComponent } from './cashflowCardSlim.component';

describe('CashflowCardComponent', () => {
  let component: CashflowCardSlimComponent;
  let fixture: ComponentFixture<CashflowCardSlimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CashflowCardSlimComponent],
    });
    fixture = TestBed.createComponent(CashflowCardSlimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
