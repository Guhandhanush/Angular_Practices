import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudendIdComponent } from './studend-id.component';

describe('StudendIdComponent', () => {
  let component: StudendIdComponent;
  let fixture: ComponentFixture<StudendIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudendIdComponent]
    });
    fixture = TestBed.createComponent(StudendIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
