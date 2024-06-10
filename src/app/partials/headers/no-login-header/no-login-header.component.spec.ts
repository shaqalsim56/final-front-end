import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLoginHeaderComponent } from './no-login-header.component';

describe('NoLoginHeaderComponent', () => {
  let component: NoLoginHeaderComponent;
  let fixture: ComponentFixture<NoLoginHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoLoginHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoLoginHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
