import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '../store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  public getStoreFromRemote(id: String):Observable<any> {
    return this.http.post("http://localhost:1100/getstoredetail", id);
  }

  public editStoreInfoFromRemote(store: Store):Observable<any> {
    return this.http.post("http://localhost:1100/editinfostore", store);
  }

}
