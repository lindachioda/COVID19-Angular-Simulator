import { Pipe, PipeTransform } from '@angular/core';

export type SortOrder = 'asc' | 'desc';



@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any,  sortOrder: SortOrder | string = 'asc', sortKey?: string): any {

    sortOrder = sortOrder && (sortOrder.toLowerCase() as any);

    if (!value || (sortOrder !== 'asc' && sortOrder !== 'desc')) { return value; }

    let numberArray= [];
    let stringArray = [];

    if (!sortKey) {
      numberArray = value.filter((item:any) => typeof item === 'number').sort();
      stringArray = value.filter((item:any) => typeof item === 'string').sort();
    } else {
      numberArray = value.filter((item:any) => typeof item[sortKey] === 'number').sort((a:any, b:any) => a[sortKey] - b[sortKey]);
      stringArray = value
          .filter((item:any) => typeof item[sortKey] === 'string')
          .sort((a:any, b:any) => {
            if (a[sortKey] < b[sortKey]) { return -1; } else if (a[sortKey] > b[sortKey]) { return 1; } else { return 0; }
          });
    }
    const sorted = [
      ...numberArray,
      ...stringArray,
      ...value.filter(
          (item:any) =>
              typeof (sortKey ? item[sortKey] : item) !== 'number' &&
              typeof (sortKey ? item[sortKey] : item) !== 'string',
      ),
    ];
    return sortOrder === 'asc' ? sorted : sorted.reverse();
  }

}

