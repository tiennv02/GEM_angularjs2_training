import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PaginationComponent} from './pagination.component';
import {UserComponent} from './user.component';
import {EditUserComponent} from './edituser.component';
import {AddUserComponent} from './adduser.component';
import { FormsModule } from '@angular/forms';
import {appRoutes} from './app.route';
import {UserService} from './service/user.service'
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    UserComponent,
    AddUserComponent,
    EditUserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRoutes,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
