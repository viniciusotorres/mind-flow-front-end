import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspiritualComponent } from './espiritual.component';

describe('EspiritualComponent', () => {
  let component: EspiritualComponent;
  let fixture: ComponentFixture<EspiritualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspiritualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspiritualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
