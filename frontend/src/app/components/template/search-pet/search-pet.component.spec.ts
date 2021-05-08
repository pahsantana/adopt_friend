import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPetComponent } from './search-pet.component';

describe('SearchPetComponent', () => {
  let component: SearchPetComponent;
  let fixture: ComponentFixture<SearchPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
