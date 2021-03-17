import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAFComponent } from './header-af.component';

describe('HeaderAFComponent', () => {
  let component: HeaderAFComponent;
  let fixture: ComponentFixture<HeaderAFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderAFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
