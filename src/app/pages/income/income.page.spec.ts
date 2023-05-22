import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomePage } from './income.page';

describe('IncomeComponent', () => {
  let component: IncomePage;
  let fixture: ComponentFixture<IncomePage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncomePage],
    });
    fixture = TestBed.createComponent(IncomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
