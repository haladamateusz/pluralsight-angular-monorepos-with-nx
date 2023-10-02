import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestPlaceholderEnvironmentsComponent } from './test-placeholder-environments.component';

describe('TestPlaceholderEnvironmentsComponent', () => {
  let component: TestPlaceholderEnvironmentsComponent;
  let fixture: ComponentFixture<TestPlaceholderEnvironmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestPlaceholderEnvironmentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestPlaceholderEnvironmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
