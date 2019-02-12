import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkexpComponent } from './workexp.component';

describe('WorkexpComponent', () => {
  let component: WorkexpComponent;
  let fixture: ComponentFixture<WorkexpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkexpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
