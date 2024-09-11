import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NomissionPage } from './nomission.page';

describe('NomissionPage', () => {
  let component: NomissionPage;
  let fixture: ComponentFixture<NomissionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NomissionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
