import { Injectable } from '@angular/core';
import { User } from '../user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsermanageService {
  [x: string]: any;

  constructor(private http: HttpClient) { }

  public loginUserFromRemote(user: User):Observable<any> {
    return this.http.post("https://commissionlist001.herokuapp.com/login", user);
  }

  public registerUserFromRemote(user: User):Observable<any> {
    return this.http.post("http://localhost:1100/register", user);
  }

  public editImageFromRemote(user: User):Observable<any> {
    return this.http.post("http://localhost:1100/editimage", user);
  }

  public getUserFromRemote(id: String):Observable<any> {
    return this.http.post("http://localhost:1100/getuserdetail", id);
  }

  public editInfoFromRemote(user:User):Observable<any> {
    return this.http.post("http://localhost:1100/updateinfo", user);
  }

  public getImageFromRemote(id: String):Observable<any> {
    return this.http.post("http://localhost:1100/getimage", id);
  }




}
