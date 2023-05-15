import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoundPage } from './notfound.page';

describe('NotfoundComponent', () => {
  let component: NotfoundPage;
  let fixture: ComponentFixture<NotfoundPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotfoundPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotfoundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
