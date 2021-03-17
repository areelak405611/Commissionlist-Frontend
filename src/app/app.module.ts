import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderAFComponent } from './header-af/header-af.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MessageComponent } from './message/message.component';
import { OrderComponent } from './order/order.component';
import { QueueComponent } from './queue/queue.component';
import { CreateQComponent } from './create-q/create-q.component';
import { SlideComponent } from './slide/slide.component';
import { StoreComponent } from './store/store.component';
import { CreateStoreComponent } from './create-store/create-store.component';
import { FormorderComponent } from './formorder/formorder.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { SetupProfileComponent } from './setup-profile/setup-profile.component';
import { EditStoreComponent } from './edit-store/edit-store.component';
import { AllStoreComponent } from './all-store/all-store.component';
import { ChatComponent } from './chat/chat.component';
import { QTionComponent } from './qtion/qtion.component';
import { UploadprofileComponent } from './uploadprofile/uploadprofile.component';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';





const config = {
  apiKey: "AIzaSyCfuMugpY_qv1lui3NQTZGj6vhRkGxww1k",
  authDomain: "projectcommislist.firebaseapp.com",
  databaseURL: "https://projectcommislist-default-rtdb.firebaseio.com",
  projectId: "projectcommislist",
  storageBucket: "projectcommislist.appspot.com",
  messagingSenderId: "486385482835",
  appId: "1:486385482835:web:089b81b934fcea5b959aa6",
  measurementId: "G-C7NSYR133D"
};


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HeaderAFComponent,
    ProfileComponent,
    RegisterComponent,
    LoginComponent,
    MessageComponent,
    OrderComponent,
    QueueComponent,
    CreateQComponent,
    SlideComponent,
    StoreComponent,
    CreateStoreComponent,
    FormorderComponent,
    EditProfileComponent,
    SetupProfileComponent,
    EditStoreComponent,
    AllStoreComponent,
    ChatComponent,
    QTionComponent,
    UploadprofileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    appRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}



