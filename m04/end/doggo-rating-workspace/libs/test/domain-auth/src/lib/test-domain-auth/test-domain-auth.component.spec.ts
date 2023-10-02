import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestDomainAuthComponent } from './test-domain-auth.component';

describe('TestDomainAuthComponent', () => {
  let component: TestDomainAuthComponent;
  let fixture: ComponentFixture<TestDomainAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestDomainAuthComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestDomainAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
