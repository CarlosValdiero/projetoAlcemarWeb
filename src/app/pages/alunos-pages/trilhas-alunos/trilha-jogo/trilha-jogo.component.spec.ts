import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrilhaJogoComponent } from './trilha-jogo.component';

describe('TrilhaJogoComponent', () => {
  let component: TrilhaJogoComponent;
  let fixture: ComponentFixture<TrilhaJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrilhaJogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrilhaJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
