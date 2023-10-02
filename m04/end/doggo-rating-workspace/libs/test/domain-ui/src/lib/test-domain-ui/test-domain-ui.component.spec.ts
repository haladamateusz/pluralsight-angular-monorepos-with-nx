import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestDomainUiComponent } from './test-domain-ui.component';

describe('TestDomainUiComponent', () => {
  let component: TestDomainUiComponent;
  let fixture: ComponentFixture<TestDomainUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestDomainUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestDomainUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
