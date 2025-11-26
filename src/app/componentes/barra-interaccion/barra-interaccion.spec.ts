import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraInteraccionComponent } from './barra-interaccion';

describe('BarraInteraccion', () => {
  let component: BarraInteraccionComponent;
  let fixture: ComponentFixture<BarraInteraccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraInteraccionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraInteraccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
