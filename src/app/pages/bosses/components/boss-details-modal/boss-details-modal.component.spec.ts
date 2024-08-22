import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BossDetailsModalComponent } from './boss-details-modal.component';

describe('BossDetailsModalComponent', () => {
  let component: BossDetailsModalComponent;
  let fixture: ComponentFixture<BossDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BossDetailsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BossDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
