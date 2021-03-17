import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../post';
import { Review } from '../review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) { }

  getReviewByUserIdFromRemote(id: String) :Observable<Review[]>{
    return this.http.post<Review[]>('http://localhost:1100/getallreview', id);
  }

  getReviewByPostFromRemote(post: Post) :Observable<Review[]>{
    return this.http.post<Review[]>('http://localhost:1100/getreviews', post);
  }


}
