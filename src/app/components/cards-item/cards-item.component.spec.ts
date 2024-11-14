import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsItemComponent } from './cards-item.component';

describe('CardsItemComponent', () => {
  let component: CardsItemComponent;
  let fixture: ComponentFixture<CardsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
