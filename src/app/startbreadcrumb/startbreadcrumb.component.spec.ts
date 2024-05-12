import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartbreadcrumbComponent } from './startbreadcrumb.component';

describe('StartbreadcrumbComponent', () => {
  let component: StartbreadcrumbComponent;
  let fixture: ComponentFixture<StartbreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartbreadcrumbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StartbreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
