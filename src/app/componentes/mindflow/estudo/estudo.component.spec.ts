import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudoComponent } from './estudo.component';

describe('EstudoComponent', () => {
  let component: EstudoComponent;
  let fixture: ComponentFixture<EstudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
