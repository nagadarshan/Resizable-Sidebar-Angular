import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightMainComponent } from './right-main.component';

describe('RightMainComponent', () => {
  let component: RightMainComponent;
  let fixture: ComponentFixture<RightMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RightMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
