import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsermanageService } from '../service/usermanage.service';
import { User } from '../user';
import { Md5 } from '../../../node_modules/angular-md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user =  new User();
  constructor(private service: UsermanageService, private router: Router) { }

  status1: boolean = false;

  ngOnInit(): void {
  }

  loginUser() {
    //let hash = Md5.hashStr(this.user.password);
    //this.user.password = hash.toString();
    this.service.loginUserFromRemote(this.user).subscribe(
      data => {
        //console.log("succeess "+this.user.username+" "+this.user.password);
        this.user = data;
        localStorage.setItem('user', JSON.stringify(this.user));
        localStorage.setItem('status', 'yes');
        localStorage.setItem('id', this.user.id);
        localStorage.setItem('username', this.user.username);
        localStorage.setItem('email', this.user.email);
        localStorage.setItem('image_pro', this.user.user_image);
        localStorage.setItem('info',this.user.info);
        this.router.navigate(['/home']);
        alert('login successful');

      },
      error => {
        this.status1 = true;
        this.user.username = null;
        this.user.password = null;
        console.log("Not found");
      });

  }

}
