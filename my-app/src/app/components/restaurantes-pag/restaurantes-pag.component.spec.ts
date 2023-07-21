import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantesPagComponent } from './restaurantes-pag.component';

describe('RestaurantesPagComponent', () => {
  let component: RestaurantesPagComponent;
  let fixture: ComponentFixture<RestaurantesPagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantesPagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantesPagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
