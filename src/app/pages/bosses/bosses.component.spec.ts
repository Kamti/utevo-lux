import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BossesComponent } from './bosses.component';

describe('BossComponent', () => {
  let component: BossesComponent;
  let fixture: ComponentFixture<BossesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BossesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BossesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
