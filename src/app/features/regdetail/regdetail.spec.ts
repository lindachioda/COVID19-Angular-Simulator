import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Regdetail } from './regdetail';

describe('Regdetail', () => {
  let component: Regdetail;
  let fixture: ComponentFixture<Regdetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Regdetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Regdetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
