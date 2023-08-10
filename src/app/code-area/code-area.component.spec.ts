import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CodeAreaComponent} from './code-area.component';

describe('SCodeFieldComponent', () => {
  let component: CodeAreaComponent;
  let fixture: ComponentFixture<CodeAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodeAreaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
