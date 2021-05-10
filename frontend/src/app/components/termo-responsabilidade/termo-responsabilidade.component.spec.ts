import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermoResponsabilidadeComponent } from './termo-responsabilidade.component';

describe('TermoResponsabilidadeComponent', () => {
  let component: TermoResponsabilidadeComponent;
  let fixture: ComponentFixture<TermoResponsabilidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermoResponsabilidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermoResponsabilidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
