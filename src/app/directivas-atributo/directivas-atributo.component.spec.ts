import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivasAtributoComponent } from './directivas-atributo.component';

describe('DirectivasAtributoComponent', () => {
  let component: DirectivasAtributoComponent;
  let fixture: ComponentFixture<DirectivasAtributoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivasAtributoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivasAtributoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
