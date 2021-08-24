import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SytemapjsComponent } from './sytemapjs.component';

describe('SytemapjsComponent', () => {
  let component: SytemapjsComponent;
  let fixture: ComponentFixture<SytemapjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SytemapjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SytemapjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
