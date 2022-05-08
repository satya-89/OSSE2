import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import {empty} from 'rxjs';

export function initLabels(config: LabelconfigService) {
  return () => config.loadXadaLabels();
}
export function initMessages(config: LabelconfigService) {
  return () => config.loadXadaMessages();
}

@Injectable()
export class LabelconfigService {
  private xadaLabels: any;
  private xadaMessages: any;
  constructor(private http: HttpClient) {
    this.loadXadaLabels().subscribe(data => {
      this.xadaLabels = data;
    });
    this.loadXadaMessages().subscribe(data => {
      this.xadaMessages = data;
    });
  }

  public loadXadaLabels(): Observable<any> {
    return this.http.get("assets/json/labels.json")
  }

  public loadXadaMessages(): Observable<any> {
    return this.http.get("assets/json/validations.json")
  }
}



