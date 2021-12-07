import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerguntasModalComponent } from './perguntas-modal.component';

describe('PerguntasModalComponent', () => {
  let component: PerguntasModalComponent;
  let fixture: ComponentFixture<PerguntasModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerguntasModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerguntasModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
