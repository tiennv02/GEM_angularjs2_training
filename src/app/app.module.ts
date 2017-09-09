////////////Form////////////////
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppComponent } from './app.component';
// import { ClickMeComponent } from './click-me.component';
// import { KeyUpComponent_v1,KeyUpComponent_v2,KeyUpComponent_v3 } from './keyup.components';
// import { LoopbackComponent } from './loop-back.component';
// import { AddFormToListComponent } from './add-form-to-list.component';

// @NgModule({
  // declarations: [
  //   AppComponent,
    // ClickMeComponent,
    // KeyUpComponent_v1,
    // KeyUpComponent_v2,
    // KeyUpComponent_v3,
    // LoopbackComponent,
//    AddFormToListComponent,
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


////////////////////////component////////////

// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { AppComponent } from './app.component';
// import { TestComponent,} from './test.component';


// @NgModule({
//   declarations: [
    // AppComponent,
    // TestComponent,
   // TestComponent1,

//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

////////////PIPES////////////////////////////////////////////

// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
//
// import { AppComponent } from './app.component';
// import { LowerUpperPipeComponent,DatePipeComponent,SlicePipeListComponent,DatePipesComponent1} from './Pipes/test-pipes.component';
// import { TempConverterPipe } from './Pipes/temp-converter.pipe';
//
// @NgModule({
//   declarations: [
//     AppComponent,
//     LowerUpperPipeComponent,
//     DatePipeComponent,
//     SlicePipeListComponent,
//     DatePipesComponent1,
//     TempConverterPipe,
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

//////////////Fom Template//////////

// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
//
// import { AppComponent } from './app.component';
// import { TempConverterPipe } from './pipes/temp-converter.pipe';
// import { ContactFormComponent } from './contact-form/contact-form.component';
// import { ContactReactiveFormComponent } from './contact-reactive-form/contact-reactive-form.component';
// import { SearchComponent } from './search/search.component';

// @NgModule({
//   declarations: [
//     AppComponent,
    // CardComponent,
    // CollapseGroupComponent,
    // CollapseComponent,
    // TempConverterPipe,
    // ContactFormComponent,
    // ContactReactiveFormComponent,
    // SearchComponent
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,
//     ReactiveFormsModule,
//     HttpModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

//////////////Fom Validation//////////
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
//
// import { AppComponent } from './app.component';
// import { SignupTformComponent } from './signup-tform/signup-tform.component';
// import { SignupRformComponent } from './signup-rform/signup-rform.component';
// import { ForbiddenUsernameDirective } from './forbidden-username.directive';
//
// @NgModule({
//   declarations: [
//     AppComponent,
//     SignupTformComponent,
//     SignupRformComponent,
//     ForbiddenUsernameDirective
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,
//     ReactiveFormsModule,
//     HttpModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
//////////////Structural-Directives//////////
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StructuralComponent, } from './structural-directives/structural.component';


@NgModule({
  declarations: [,
      AppComponent,
      StructuralComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }