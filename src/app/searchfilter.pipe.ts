import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(tds: any[], searchValue: string): any[] {

    if(!tds || !searchValue) {
      return tds;
    }
    return tds.filter(td =>
      td.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      td.party_name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      td.area.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      td.pledge_status.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));

  }

}