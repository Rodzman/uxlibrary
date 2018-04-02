import { TestBed, inject } from '@angular/core/testing';

import { PostsService } from './posts.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable } from 'rxjs/Observable';
import { Links } from './posts.model'

describe('PostsService', () => {
  
  let service: PostsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostsService]
    });

    service = TestBed.get(PostsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(()=>{
    httpMock.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have links method', () => {
    expect(service.links).toBeTruthy();
  });

  it('should retrieve posts from the API via GET', () => {
    const posts: Links[] = [
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
    
    service.links().subscribe(posts => {
      expect(posts.length).toBe(1);
      expect(posts).toEqual(posts);
    })

    const request = httpMock.expectOne(`${service.API_URL}`);

    expect(request.request.method).toBe('GET');

    request.flush(posts);
  });

});
