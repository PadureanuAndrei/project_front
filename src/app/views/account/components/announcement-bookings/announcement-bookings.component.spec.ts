import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementBookingsComponent } from './announcement-bookings.component';

describe('AnnouncementBookingsComponent', () => {
  let component: AnnouncementBookingsComponent;
  let fixture: ComponentFixture<AnnouncementBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnouncementBookingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
