import { Pipe, PipeTransform } from '@angular/core';
import { Listing } from '../listings';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: Listing[], searchKey: string): Listing[] {
        if (!items) { return []; }
        if (!searchKey) { return items; }
        return items.filter(item => {
            if (item && item.description && item.filename && item.title) {
                let found: boolean = false;
                const searchTerms = [item.description.toLowerCase(), item.filename.toLowerCase(), item.title.toLowerCase()];
                searchTerms.forEach(term => {
                    if (term.includes(searchKey.toLowerCase())) found = true;
                });
                return found;
            }
            return false;
        });
    }
}
