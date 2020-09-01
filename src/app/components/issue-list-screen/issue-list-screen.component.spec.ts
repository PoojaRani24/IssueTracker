import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueListScreenComponent } from './issue-list-screen.component';

describe('IssueListScreenComponent', () => {
  let component: IssueListScreenComponent;
  let fixture: ComponentFixture<IssueListScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueListScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueListScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
