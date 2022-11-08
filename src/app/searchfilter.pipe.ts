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
      td.partyName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      td.constituency.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      td.score.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));

  }

}