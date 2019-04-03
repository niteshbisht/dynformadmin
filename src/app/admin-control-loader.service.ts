import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_DATA } from './models/mock-data,model';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminControlLoaderService {

  constructor(private httpClient: HttpClient) { }

  getMockData() {
    return of(MOCK_DATA).pipe(delay(200));
  }

  insertFormConfigInElastic(payLoad: any): Observable<any> {
    return this.httpClient.put('http://localhost:9200/digitalforms/_doc', payLoad);
  }
}
