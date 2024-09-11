import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VersementPage } from './versement.page';

describe('VersementPage', () => {
  let component: VersementPage;
  let fixture: ComponentFixture<VersementPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VersementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
