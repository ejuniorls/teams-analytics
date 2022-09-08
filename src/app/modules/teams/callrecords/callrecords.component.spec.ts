import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallrecordsComponent } from './callrecords.component';

describe('CallrecordsComponent', () => {
  let component: CallrecordsComponent;
  let fixture: ComponentFixture<CallrecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallrecordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallrecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
