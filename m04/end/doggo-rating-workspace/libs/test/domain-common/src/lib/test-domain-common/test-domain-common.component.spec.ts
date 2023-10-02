import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestDomainCommonComponent } from './test-domain-common.component';

describe('TestDomainCommonComponent', () => {
  let component: TestDomainCommonComponent;
  let fixture: ComponentFixture<TestDomainCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestDomainCommonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestDomainCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
