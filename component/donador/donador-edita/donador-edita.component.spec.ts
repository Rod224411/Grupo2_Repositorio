import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonadorEditaComponent } from './donador-edita.component';

describe('DonadorEditaComponent', () => {
  let component: DonadorEditaComponent;
  let fixture: ComponentFixture<DonadorEditaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonadorEditaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonadorEditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
