import { Pipe, PipeTransform } from '@angular/core';
import { Links } from './posts.model';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
    transform(items: Links[], searchText: string): any[] {
        if (!items) { return []; }
        if (!searchText) { return items; }
        searchText = searchText.toLowerCase();
        const result = items.filter( it => {
            return it.category.toLowerCase().includes(searchText) ||
                   it.meta.title.toLowerCase().includes(searchText) ||
                   it.meta.author.toLowerCase().includes(searchText) ||
                   it.meta.url.toLowerCase().includes(searchText);
        });
        if (result.length === 0) {
            return [-1];
        }
        return result;
    }
}

