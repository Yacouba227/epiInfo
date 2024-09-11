import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoremisePage } from './noremise.page';

describe('NoremisePage', () => {
  let component: NoremisePage;
  let fixture: ComponentFixture<NoremisePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NoremisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
