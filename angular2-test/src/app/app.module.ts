import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { ClickMeComponent } from './click-me.component';
// import { KeyUpComponent_v1,KeyUpComponent_v2,KeyUpComponent_v3 } from './keyup.components';
// import { LoopbackComponent } from './loop-back.component';
// import { AddFormToListComponent } from './add-form-to-list.component';
import { TestComponent, } from './test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    // TestComponent1,
    // ClickMeComponent,
    // KeyUpComponent_v1,
    // KeyUpComponent_v2,
    // KeyUpComponent_v3,
    // LoopbackComponent,
    // AddFormToListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
