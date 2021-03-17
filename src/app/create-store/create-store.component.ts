import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-create-store',
  templateUrl: './create-store.component.html',
  styleUrls: ['./create-store.component.css']
})
export class CreateStoreComponent implements OnInit {

  constructor(private postservice: PostService, private router: Router) { }

  ngOnInit(): void {
  }

  post = new Post();
  status_post = {s: true};
  createPost(){
    this.post.post_owner = localStorage.getItem('id');
    this.post.status = this.status_post.s;
    this.postservice.createPostFromRemote(this.post)
    .subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/profile']);
      },
      error => {
        console.log(error);
      });

  }





}
