import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { User } from '../user';
import { AngularFireDatabase,} from '@angular/fire/database'
import firebase from 'firebase';
import { Router } from '@angular/router';
import { UsermanageService } from '../service/usermanage.service';


@Component({
  selector: 'app-uploadprofile',
  templateUrl: './uploadprofile.component.html',
  styleUrls: ['./uploadprofile.component.css']
})
export class UploadprofileComponent implements OnInit {


  user_image$: Observable<User[]>;
  path: String
  uploadPercentage$: Observable<number>;
  uploadProgress: any;
  ref: any;
  //task: any;
  downloadURL: any;
  urlnow: any;

  constructor(private fireStorage: AngularFireStorage,  private db: AngularFireDatabase,
    private router: Router, private userservice: UsermanageService) {
//private af: AngularFireStorage
  }



  basePath = '/images';                       //  <<<<<<<
  downloadableURL = "";                      //  <<<<<<<
  task: AngularFireUploadTask;               //  <<<<<<<

  progressValue: Observable<number>;
  ngOnInit() {
   // this.user_image$ = this.db.list<User>('user_image').valueChanges();
  }


  upload(event) {
    const file = event.target.files[0];
    const randomId = Math.random().toString(36).substring(8);
    const filePath = `profile/${randomId}${file.name}`;  // path at which image will be stored in the firebase storage
    this.task =  this.fireStorage.upload(filePath, file);    // upload task
    this.progressValue = this.task.percentageChanges();

   }

   clickUpNone() {
    this.router.navigate(['/upprofile']);
    alert('Cancle');
   }

   public ImageUrl = "/assets/+1.png";

  file: any;
  filePath: any;

  onFileChanged(event : any) {
    this.file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.ImageUrl = event.target.result;
      const randomId = Math.random().toString(36).substring(8);
      this.filePath = `profile/${randomId}${this.file.name}`;  // path at which image will be stored in the firebase storage
    }
    reader.readAsDataURL(this.file);
  }

  imgLink:any;

  user_c = new User();
  async onFileChangedUp() {
    this.task =  this.fireStorage.upload(this.filePath, this.file);    // upload task
    this.progressValue = this.task.percentageChanges();
    (await this.task).ref.getDownloadURL().then(url => {this.downloadableURL = url;
      this.imgLink = this.downloadableURL;
      user.id = localStorage.getItem('id');
      user.user_image = this.imgLink;
      this.userservice.editImageFromRemote(user)
        .subscribe(
       data => {
         console.log(user);
       },
       error => {
         console.log(error);
       });
    });
    localStorage.setItem('status_reload','1')
    localStorage.setItem('image_pro',this.imgLink)
    const user = new User;
    //window.location.reload();
   }
  }

 // feturedPhotoSelected(event: any){
 //   const file: File = event.target.files[0];
 //   console.log("seleted :", file.name );
 //   const metaData = {'contentType': file.type};
 /*   const randomId = Math.random().toString(36).substring(2);
    const storeageRef: firebase.storage.Reference = firebase.storage().ref(`profile/${randomId}`);
    storeageRef.put(file, metaData);
    console.log("Uploading: ", file.name );
  }


  upload(event) {
    const randomId = Math.random().toString(36).substring(2);
    onst path = `profile/${randomId}`;
    this.ref = this.af.ref(path);
   this.task = this.ref.put(event.target.files[0]);
    this.uploadProgress = this.task.percentageChanges();
   }

 // clickUp() {
 //   console.log(this.uploadProgress)
  //  this.db.list('user_image').push(this.uploadProgress);
 // }


 // onFileUpload(files: FileList) {
 //   console.log(files)
 //   const file = files[0];
 //   const path = `profile/${file.name}`;
 //   this.uploadPercentage$ = this.af.upload(path, file).percentageChanges();
 // }
*/


