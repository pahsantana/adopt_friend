import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdocaoComponent } from './adocao.component';

describe('AdocaoComponent', () => {
  let component: AdocaoComponent;
  let fixture: ComponentFixture<AdocaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdocaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdocaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
