import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../service/store.service';
import { UsermanageService } from '../service/usermanage.service';
import { Store } from '../store';
import { User } from '../user';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private storeservice: StoreService, private router: Router, private userservice: UsermanageService) { }

  store = new Store();
  cerrentInfo = '';



  public ImageUrl = "";
  public FileImage : any;

  user =  new User();
  id = localStorage.getItem('id');
  username = localStorage.getItem('username');
  info = localStorage.getItem('info');

  onFileChange(event : any) {
    this.FileImage = event.target.files[0];
      var reader = new FileReader();
      reader.onload = (event:any) => {
        this.ImageUrl = event.target.result;
      }
      reader.readAsDataURL(this.FileImage);
  }

  ngOnInit(): void {
    this.cerrentInfo = localStorage.getItem('info');
  }

  getInfo(){
    return localStorage.getItem('info');
  }

  editInfoStore() {
    this.store.info = this.cerrentInfo;
    this.storeservice.editStoreInfoFromRemote(this.store)
    .subscribe(
       data => {
         this.store = data;
         console.log(data);
       },
       error => {
         console.log(error);
       });

       localStorage.setItem('store_info',this.store.info);
  }

  editInfo(){
    const temp = new User;
    temp.id = localStorage.getItem('id');
    temp.info = this.cerrentInfo;
    this.userservice.editInfoFromRemote(temp)
        .subscribe(
       data => {
         localStorage.setItem('info',temp.info)
         this.info = temp.info;
         console.log(data);
       },
       error => {
         console.log(error);
       });
  }

}
