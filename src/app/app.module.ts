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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LowerUpperPipeComponent,DatePipeComponent,SlicePipeListComponent,DatePipesComponent1,} from './Pipes/test-pipes.component.ts';
import { TempConverterPipe } from './pipes/temp-converter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LowerUpperPipeComponent,
    DatePipeComponent,
    SlicePipeListComponent,
    DatePipesComponent1,
    TempConverterPipe,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//////////////

// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
//
// import { AppComponent } from './app.component';
//
// @NgModule({
//   declarations: [
//     AppComponent,
//
//
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }