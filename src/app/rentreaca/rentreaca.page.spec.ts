import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RentreacaPage } from './rentreaca.page';

describe('RentreacaPage', () => {
  let component: RentreacaPage;
  let fixture: ComponentFixture<RentreacaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RentreacaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
