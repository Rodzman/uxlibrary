import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListComponent } from './post-list.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';

import { Links } from '../posts.model'
import { PostsService } from '../posts.service';
import { FilterPipe } from '../filter.pipe';
import { ReplacePipe } from '../replace.pipe';
import { PostUnitComponent } from './post-unit/post-unit.component';

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        PostListComponent,
        PostUnitComponent,
        FilterPipe,
        ReplacePipe
      ],
      imports: [HttpClientTestingModule],
      providers: [PostsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should sort the object', () => {
    let initialObj = [
      {
        "meta": {
          "author": "Mikael Greif",
          "title": "What do you do with a failed project?",
          "url": "mika.el"
        },
        "category": "discussion",
        "comments": 2,
        "created_at": 1459857600,
        "upvotes": 2
      },
      {
        "meta": {
          "author": "Kenny Schrub",
          "title": "Some things can't be prototyped",
          "url": "mika.el"
        },
        "category": "discussion",
        "comments": 25,
        "created_at": 1460203200,
        "isOwner": true,
        "upvotes": 4
      }
    ];
    let finalObj = [
      {
        "meta": {
          "author": "Kenny Schrub",
          "title": "Some things can't be prototyped",
          "url": "mika.el"
        },
        "category": "discussion",
        "comments": 25,
        "created_at": 1460203200,
        "isOwner": true,
        "upvotes": 4
      },
      {
        "meta": {
          "author": "Mikael Greif",
          "title": "What do you do with a failed project?",
          "url": "mika.el"
        },
        "category": "discussion",
        "comments": 2,
        "created_at": 1459857600,
        "upvotes": 2
      }      
    ];
    component.links = initialObj;
    expect(component.sortPosts('popular')).toEqual(Object.values(finalObj));
    expect(component.sortPosts('date')).toEqual(Object.values(finalObj));
    expect(component.sortPosts('comments')).toEqual(Object.values(finalObj));
  })

  
  
});
