import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ReviewService } from '../service/review.service';
import { Review } from '../review';
import { StoreService } from '../service/store.service';
import { Store } from '../store';
import { UsermanageService } from '../service/usermanage.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user =  new User();

  id = localStorage.getItem('id');
  username = localStorage.getItem('username');
  password = localStorage.getItem('password');
  email = localStorage.getItem('email');
  image = localStorage.getItem('image_pro');
  public images = "assets/dfpro.png";
  info = new String;

  constructor(private reviewservice: ReviewService, private storeservice: StoreService, private userservice: UsermanageService) {

  }

  ngOnInit(): void {
    this.user.id = this.id;
    this.user.username = this.username;
    this.user.password = this.password;
    this.user.email = this.email;
    this.retrieveReviews();
    this.loadProfile();
  }

  reviews: Review[];

  retrieveReviews() {
    this.reviewservice.getReviewByUserIdFromRemote(this.id)
    .subscribe(
       data => {
         this.reviews = data;
         console.log(data);
       },
       error => {
         console.log(error);
       });
  }

  user_c:User;


  loadProfile(){
        this.userservice.getUserFromRemote(this.id)
        .subscribe(
       data => {
        this.user = data;
        if (localStorage.getItem('image_pro') != null) {
          this.images = this.user.user_image;
          localStorage.setItem('image_pro',this.user.user_image)
        }
        localStorage.setItem('info',this.user.info)
         console.log(data);
       },
       error => {
         console.log(error);
       });
  }

  store = new Store();
  retrieveStore() {
    this.storeservice.getStoreFromRemote(this.id)
    .subscribe(
       data => {
         this.store = data;
         localStorage.setItem('store_info',this.store.info);
         localStorage.setItem('store_id',this.store.store_id);
         console.log(data);
       },
       error => {
         console.log(error);
       });
  }


}
