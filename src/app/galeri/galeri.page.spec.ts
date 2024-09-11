import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GaleriPage } from './galeri.page';

describe('GaleriPage', () => {
  let component: GaleriPage;
  let fixture: ComponentFixture<GaleriPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
