import { FilterPipe } from './filter.pipe';
import { Links } from './posts.model';

describe('Pipe: Filter', () => {
    let pipe: FilterPipe;

    beforeEach(() => {
        pipe = new FilterPipe();
    });

    it('providing no items returns fallback', () => {
        let links:Links[];
        expect(pipe.transform(links,'test')).toEqual([]);
    })

    it('providing no searchText returns items', () => {
        let searchText = '';
        let items = [
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
              },
              {
                "meta": {
                  "author": "Christopher Alesund",
                  "title": "Case study: Redesigning the Folyo landing page",
                  "url": "medium.com"
                },
                "category": "case_study",
                "comments": 0,
                "created_at": 1460289600,
                "upvotes": 2
              }
        ];
        expect(pipe.transform(items,searchText)).toBe(items);
    })

    it('providing a specified searchText returns the filtered object', () => {
        let searchText = 'Danil';
        let initialItems = [
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
              },
              {
                "meta": {
                  "author": "Christopher Alesund",
                  "title": "Case study: Redesigning the Folyo landing page",
                  "url": "medium.com"
                },
                "category": "case_study",
                "comments": 0,
                "created_at": 1460289600,
                "upvotes": 2
              }
        ];
        let finalItems = [
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
        expect(pipe.transform(initialItems,searchText)).toEqual(finalItems);
    })

    it('should return "-1" if not match any criteria', () => {
        let searchText = 'Dummytext';
        let initialItems = [
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
              },
              {
                "meta": {
                  "author": "Christopher Alesund",
                  "title": "Case study: Redesigning the Folyo landing page",
                  "url": "medium.com"
                },
                "category": "case_study",
                "comments": 0,
                "created_at": 1460289600,
                "upvotes": 2
              }
        ];
        expect(pipe.transform(initialItems,searchText)).toEqual([-1]);
    })
    
});