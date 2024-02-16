import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftMainComponent } from './left-main.component';

describe('LeftMainComponent', () => {
  let component: LeftMainComponent;
  let fixture: ComponentFixture<LeftMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeftMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
