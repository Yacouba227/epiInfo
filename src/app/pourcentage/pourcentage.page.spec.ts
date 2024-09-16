import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PourcentagePage } from './pourcentage.page';

describe('PourcentagePage', () => {
  let component: PourcentagePage;
  let fixture: ComponentFixture<PourcentagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PourcentagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
