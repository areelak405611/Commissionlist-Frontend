import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from '../post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPostsByUserIdFromRemote(id: String) :Observable<Post[]>{
    return this.http.post<Post[]>('http://localhost:1100/getposts', id);
  }

  getPostFromRemote(post: Post) :Observable<Post>{
    return this.http.post<Post>('http://localhost:1100/getonepost', post);
  }

  editPostFromRemote(post: Post){
    return this.http.post('http://localhost:1100/editpost', post);
  }

  createPostFromRemote(post:Post){
    return this.http.post('http://localhost:1100/addpost', post);
  }

}
