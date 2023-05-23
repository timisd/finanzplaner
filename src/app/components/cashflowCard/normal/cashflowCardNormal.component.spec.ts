import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashflowCardNormalComponent } from './cashflowCardNormal.component';

describe('CashflowCardComponent', () => {
  let component: CashflowCardNormalComponent;
  let fixture: ComponentFixture<CashflowCardNormalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CashflowCardNormalComponent],
    });
    fixture = TestBed.createComponent(CashflowCardNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
