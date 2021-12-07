import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrilhasModalComponent } from './trilhas-modal.component';

describe('TrilhasModalComponent', () => {
  let component: TrilhasModalComponent;
  let fixture: ComponentFixture<TrilhasModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrilhasModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrilhasModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
