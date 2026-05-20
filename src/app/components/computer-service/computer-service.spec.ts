import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerService } from './computer-service';

describe('ComputerService', () => {
  let component: ComputerService;
  let fixture: ComponentFixture<ComputerService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputerService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputerService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
