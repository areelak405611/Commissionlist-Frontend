import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../post';
import { Review } from '../review';
import { PostService } from '../service/post.service';
import { ReviewService } from '../service/review.service';
declare  var jQuery:  any;

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private postservice: PostService, private router: Router, private reviewservice: ReviewService) {  }
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
       this.retrieveReview();
  }

  reviews: Review[];

  retrieveReview() {
    this.reviewservice.getReviewByPostFromRemote(this.post)
    .subscribe(
       data => {
         this.reviews = data;
         console.log(data);
       },
       error => {
         console.log(error);
       });
  }

}
