import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportarIncidencias } from './reportar-incidencias';

describe('ReportarIncidencias', () => {
  let component: ReportarIncidencias;
  let fixture: ComponentFixture<ReportarIncidencias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportarIncidencias],
    }).compileComponents();

    fixture = TestBed.createComponent(ReportarIncidencias);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
