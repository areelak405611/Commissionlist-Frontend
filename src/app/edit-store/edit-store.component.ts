import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-edit-store',
  templateUrl: './edit-store.component.html',
  styleUrls: ['./edit-store.component.css']
})
export class EditStoreComponent implements OnInit {

  constructor(private postservice: PostService, private router: Router) {  }

  post_cerrent = new Post();
  post = new Post();

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    this.retrievePost();
  }
  id = localStorage.getItem('id');
  username = new String;

  retrievePost() {
    this.post.post_id = localStorage.getItem('post_id');
    this.post.post_owner = localStorage.getItem('post_owner');
    this.postservice.getPostFromRemote(this.post)
    .subscribe(
       data => {
         this.post = data;
         this.post_cerrent = this.post;
         console.log(data);
       },
       error => {
         console.log(error);
       });
  }

  status_post = {s: true};
  editPost(){
    this.post.status = this.status_post.s;
    this.post_cerrent.status = true;
    this.post_cerrent.timestamp = null;
    this.postservice.editPostFromRemote(this.post_cerrent)
    .subscribe(
       data => {
         console.log(data);
       },
       error => {
         console.log(error);
       });
       this.router.navigate(['/store']);
  }

}
