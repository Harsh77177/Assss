import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponetComponent } from './app-componet.component';

describe('AppComponetComponent', () => {
  let component: AppComponetComponent;
  let fixture: ComponentFixture<AppComponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
