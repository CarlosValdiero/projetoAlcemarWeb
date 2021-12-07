import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunosModalComponent } from './alunos-modal.component';

describe('AlunosModalComponent', () => {
  let component: AlunosModalComponent;
  let fixture: ComponentFixture<AlunosModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunosModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
