import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MotdgPage } from './motdg.page';

describe('MotdgPage', () => {
  let component: MotdgPage;
  let fixture: ComponentFixture<MotdgPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MotdgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
