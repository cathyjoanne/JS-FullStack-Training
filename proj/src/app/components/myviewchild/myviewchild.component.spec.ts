import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyviewchildComponent } from './myviewchild.component';

describe('MyviewchildComponent', () => {
  let component: MyviewchildComponent;
  let fixture: ComponentFixture<MyviewchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyviewchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyviewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
