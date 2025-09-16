import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbIconComponent } from './eb-icon.component';

describe('EbIconComponent', () => {
  let component: EbIconComponent;
  let fixture: ComponentFixture<EbIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EbIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EbIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
