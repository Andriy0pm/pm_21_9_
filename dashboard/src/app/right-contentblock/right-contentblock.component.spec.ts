import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightContentblockComponent } from './right-contentblock.component';

describe('RightContentblockComponent', () => {
  let component: RightContentblockComponent;
  let fixture: ComponentFixture<RightContentblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightContentblockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RightContentblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
