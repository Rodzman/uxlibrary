import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'replace'
})

export class ReplacePipe implements PipeTransform {
    transform(category: string) {
        return category.replace(/_/g, ' ');
    }
}
