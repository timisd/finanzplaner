import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensePage } from './expense.page';

describe('ExpenseComponent', () => {
  let component: ExpensePage;
  let fixture: ComponentFixture<ExpensePage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpensePage],
    });
    fixture = TestBed.createComponent(ExpensePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
