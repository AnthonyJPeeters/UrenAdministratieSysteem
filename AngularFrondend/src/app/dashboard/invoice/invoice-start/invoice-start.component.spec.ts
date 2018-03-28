import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceStartComponent } from './invoice-start.component';

describe('InvoiceStartComponent', () => {
  let component: InvoiceStartComponent;
  let fixture: ComponentFixture<InvoiceStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
