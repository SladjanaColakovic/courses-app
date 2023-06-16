import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableTableFormsComponent } from './editable-table-forms.component';

describe('EditableTableFormsComponent', () => {
  let component: EditableTableFormsComponent;
  let fixture: ComponentFixture<EditableTableFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditableTableFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditableTableFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
