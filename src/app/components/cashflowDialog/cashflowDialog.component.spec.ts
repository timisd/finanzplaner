import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashflowDialogComponent } from './cashflowDialog.component';

describe('CashflowDialogComponent', () => {
  let component: CashflowDialogComponent;
  let fixture: ComponentFixture<CashflowDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CashflowDialogComponent],
    });
    fixture = TestBed.createComponent(CashflowDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
