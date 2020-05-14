import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MartialartsComponent } from './martialarts.component';

describe('MartialartsComponent', () => {
  let component: MartialartsComponent;
  let fixture: ComponentFixture<MartialartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MartialartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MartialartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
