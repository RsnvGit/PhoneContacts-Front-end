import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgnoredContactComponent } from './ignored-contact.component';

describe('IgnoredContactComponent', () => {
  let component: IgnoredContactComponent;
  let fixture: ComponentFixture<IgnoredContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IgnoredContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IgnoredContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
