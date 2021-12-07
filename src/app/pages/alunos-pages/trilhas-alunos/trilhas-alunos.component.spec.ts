import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrilhasAlunosComponent } from './trilhas-alunos.component';

describe('TrilhasAlunosComponent', () => {
  let component: TrilhasAlunosComponent;
  let fixture: ComponentFixture<TrilhasAlunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrilhasAlunosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrilhasAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
