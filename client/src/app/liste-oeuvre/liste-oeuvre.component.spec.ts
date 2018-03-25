import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeOeuvreComponent } from './liste-oeuvre.component';

describe('ListeOeuvreComponent', () => {
  let component: ListeOeuvreComponent;
  let fixture: ComponentFixture<ListeOeuvreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeOeuvreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeOeuvreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
