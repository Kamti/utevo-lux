import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BossTileComponent } from './boss-tile.component';

describe('BossTileComponent', () => {
  let component: BossTileComponent;
  let fixture: ComponentFixture<BossTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BossTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BossTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
