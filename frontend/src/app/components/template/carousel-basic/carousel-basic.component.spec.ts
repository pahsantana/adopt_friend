import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdCarouselBasic } from './carousel-basic.component';

describe('NgbdCarouselBasic', () => {
  let component: NgbdCarouselBasic;
  let fixture: ComponentFixture<NgbdCarouselBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgbdCarouselBasic]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdCarouselBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
