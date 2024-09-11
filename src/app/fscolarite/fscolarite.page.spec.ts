import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FscolaritePage } from './fscolarite.page';

describe('FscolaritePage', () => {
  let component: FscolaritePage;
  let fixture: ComponentFixture<FscolaritePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FscolaritePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
