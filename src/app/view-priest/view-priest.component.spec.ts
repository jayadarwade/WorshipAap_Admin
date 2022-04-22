import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPriestComponent } from './view-priest.component';

describe('ViewPriestComponent', () => {
  let component: ViewPriestComponent;
  let fixture: ComponentFixture<ViewPriestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPriestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPriestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
