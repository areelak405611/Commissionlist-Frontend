import { Routes, RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
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


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'message', component: MessageComponent },
    { path: 'order', component: OrderComponent },
    { path: 'queue', component: QueueComponent },
    { path: 'createq', component: CreateQComponent },
    { path: 'slide', component: SlideComponent },
    { path: 'store', component: StoreComponent },
    { path: 'c_store', component: CreateStoreComponent },
    { path: 'formorder', component: FormorderComponent },
    { path: 'edit_profile', component: EditProfileComponent },
    { path: 'setup_profile', component: SetupProfileComponent },
    { path: 'edit_store', component: EditStoreComponent },
    { path: 'allstore', component: AllStoreComponent },
    { path: 'chat', component: ChatComponent },
    { path: 'c_QT', component: QTionComponent },
    { path: 'upprofile', component: UploadprofileComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
