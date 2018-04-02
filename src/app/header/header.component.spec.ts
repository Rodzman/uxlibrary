import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [ ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    // component = fixture.componentInstance;
    component = new HeaderComponent(new FormBuilder())
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create a form with one control', () => {
    expect(component.searchForm.contains('searchControl')).toBeTruthy();
  });

  it('should update searchText on input change',()=>{
    let text = '';
    component.searchText.subscribe(value => text = value);
    component.searchControl.setValue('teste');
    expect(text).toEqual(component.searchControl.value);
  })
});
