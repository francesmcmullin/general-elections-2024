import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private _thumbnailMessageSource = new Subject<string>();
  thumbnailMessage$ = this._thumbnailMessageSource.asObservable();


  constructor() { }

  sendMessage(message: string) {
    this._thumbnailMessageSource.next(message);
  }
}
