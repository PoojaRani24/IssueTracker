import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneCardComponent } from './done-card.component';

describe('DoneCardComponent', () => {
  let component: DoneCardComponent;
  let fixture: ComponentFixture<DoneCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoneCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
