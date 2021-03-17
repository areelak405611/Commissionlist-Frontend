import { Component, OnInit } from '@angular/core';
import { UsermanageService } from '../service/usermanage.service';
import { User } from '../user';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showHead: boolean = false;
  user = new User();
  public ImageUrl = "/assets/+1.png";


 public image = "/assets/dfpro.png";

  constructor(private service: UsermanageService, private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (localStorage.length != 0) {
          if (localStorage.getItem('image_pro') != null) {
            this.image = localStorage.getItem('image_pro');
          }
          this.showHead = false;
        } else {
          this.showHead = true;
        }
      }
    }
    );
  }

  ngOnInit(): void {
    if (localStorage.getItem('image_pro') != null) {
      this.image = localStorage.getItem('image_pro');
    }
  }

  id = localStorage.getItem('id');
  url:any;

  getImage(){
    this.service.getImageFromRemote(this.id)
    .subscribe(
      data => {
        this.image = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }


  logOut() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

}
