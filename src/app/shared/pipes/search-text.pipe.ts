import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchText'
})
export class SearchTextPipe implements PipeTransform {
  
  transform(items: any, filter: any, defaultFilter: boolean): any {
    if (!filter) {
      return items;
    }

    if (filter && filter.city == 'All') {
      return items;
    }

    if (!Array.isArray(items)) {
      return items;
    }

    if(filter && Array.isArray(items) && items.length === 0) {
      return [-1];
    }

    if (filter && Array.isArray(items)) {
      let filterKeys = Object.keys(filter);

      let filterValues = Object.values(filter);
      if (filterValues == null) {
        return items;
      }

      if (defaultFilter) {
        return items.filter(item =>
          filterKeys.reduce((x, keyName) =>
            (x && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] == "", true));
      }
      else {
        return items.filter(item => {
          return filterKeys.some((keyName) => {
            return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] == "";
          });
        });
      }
    }
  }

}
