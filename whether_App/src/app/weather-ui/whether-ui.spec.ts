import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhetherUI } from './whether-ui';

describe('WhetherUI', () => {
  let component: WhetherUI;
  let fixture: ComponentFixture<WhetherUI>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhetherUI]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhetherUI);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
