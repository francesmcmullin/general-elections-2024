import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ReplaySubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TdService {
  private candidatesSource = new ReplaySubject<any>(1);    // <-- buffer 1, will emit the last result on subscription
  public candidates$ = this.candidatesSource.asObservable();

  constructor(private http: HttpClient) {
    this.getCandidates();         // <-- call API once
  }

  getCandidates() {
    this.http.get('https://action.uplift.ie/decisions/empty-homes-ge-2024/show_pledges').subscribe(
      res => this.candidatesSource.next(res),
      err => this.candidatesSource.error(err)
    );
  }
}
