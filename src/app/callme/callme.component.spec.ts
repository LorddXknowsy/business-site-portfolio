import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallmeComponent } from './callme.component';

describe('CallmeComponent', () => {
  let component: CallmeComponent;
  let fixture: ComponentFixture<CallmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
