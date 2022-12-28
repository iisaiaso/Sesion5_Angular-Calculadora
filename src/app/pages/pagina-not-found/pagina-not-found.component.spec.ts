import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaNotFoundComponent } from './pagina-not-found.component';

describe('PaginaNotFoundComponent', () => {
  let component: PaginaNotFoundComponent;
  let fixture: ComponentFixture<PaginaNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaNotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
