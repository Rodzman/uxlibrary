import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { PostUnitComponent } from './post-unit.component';
import { ReplacePipe } from '../../replace.pipe';
import { Links } from '../../posts.model';

describe('PostUnitComponent', () => {
  let component: PostUnitComponent;
  let fixture: ComponentFixture<PostUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        PostUnitComponent,
        ReplacePipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostUnitComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it('should set the link value', () => {
    let link = [
      {
          "meta": {
            "author": "Danil Ishutin",
            "title": "Font Size Idea: px at Root, rem for Components, em for Text Elements",
            "url": "css-tricks.com"
          },
          "category": "ux_ui",
          "comments": 7,
          "created_at": 1459857600,
          "upvotes": 9
      }
    ];
    component.link = link;
    expect(component.link).toEqual(link);
  });
});
