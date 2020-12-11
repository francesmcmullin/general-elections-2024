import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(events: any[], searchValue: string): any[] {

    if(!events || !searchValue) {
      return events;
    }
    return events.filter(event =>
      event.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      event.party.partyName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      event.constituency.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      event.score.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));

  }

}
