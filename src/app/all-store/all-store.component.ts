import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-all-store',
  templateUrl: './all-store.component.html',
  styleUrls: ['./all-store.component.css']
})
export class AllStoreComponent implements OnInit {



  constructor(private postservice: PostService, private router: Router) {  }

  ngOnInit(): void {
    this.retrievePosts();
  }
  id = localStorage.getItem('id');
  posts : Post[];

  retrievePosts() {
    this.postservice.getPostsByUserIdFromRemote(this.id)
    .subscribe(
       data => {
         this.posts = data;
         console.log(data);
       },
       error => {
         console.log(error);
       });
  }

  selectPost(post:Post){
    localStorage.setItem('post_id',post.post_id);
    localStorage.setItem('post_owner',post.post_owner);
  }

}
