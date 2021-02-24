import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YellowButtonComponent } from './yellow-button.component';

describe('YellowButtonComponent', () => {
  let component: YellowButtonComponent;
  let fixture: ComponentFixture<YellowButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YellowButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YellowButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
