import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InprogressCardComponent } from './inprogress-card.component';

describe('InprogressCardComponent', () => {
  let component: InprogressCardComponent;
  let fixture: ComponentFixture<InprogressCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InprogressCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InprogressCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
