import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindflowComponent } from './mindflow.component';

describe('MindflowComponent', () => {
  let component: MindflowComponent;
  let fixture: ComponentFixture<MindflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MindflowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MindflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
