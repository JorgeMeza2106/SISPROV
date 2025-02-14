import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProformaComponent } from './lista-proforma.component';

describe('ListaProformaComponent', () => {
  let component: ListaProformaComponent;
  let fixture: ComponentFixture<ListaProformaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaProformaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
