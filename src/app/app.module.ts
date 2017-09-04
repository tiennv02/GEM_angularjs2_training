import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { Page1Component } from './page1.component';
import { Page2Component } from './page2.component';
import { NotfoundComponent } from './notfound.component';
import { TutorialComponent } from './tutorial.component';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';

//import { appRoutes } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    TutorialComponent,
    HomeComponent,
    Page1Component,
    Page2Component,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //appRoutes
    RouterModule.forRoot([
	{ path: '', component: HomeComponent },
	//{ path: '', redirectTo: 'page1', pathMatch:'full' },
	{ path: 'page1', component: Page1Component },
	{ path: 'page2', component: Page2Component },
	{ path: '**', component: NotfoundComponent}
	])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
