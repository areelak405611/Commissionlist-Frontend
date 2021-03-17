import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsermanageService } from '../service/usermanage.service';
import { Router } from '@angular/router';
import { Md5 } from '../../../node_modules/angular-md5';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User();
  constructor(private service: UsermanageService, private router: Router) { }

  status: boolean = false;
  comfirmpass = new String;
  ngOnInit(): void {
  }

  registerUser() {
    if (this.user.username == null || this.user.password == null) {
      alert('Please fill in information');
    } else {
      if (this.comfirmpass != this.user.password) {
        alert('Your password and confirmation password do not match.');
      }
      else {
       // let hash = Md5.hashStr(this.user.password);
       // this.user.password = hash.toString();
        this.service.registerUserFromRemote(this.user).subscribe(
          data => {
            console.log('succeess');
            this.status = true;
            alert('Registration success');
            this.router.navigate(['/login']);
          },
          error => {
            console.log('error');
          });
      }

    }

  }

}
