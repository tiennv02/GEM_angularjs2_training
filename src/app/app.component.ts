import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
    <div class="body">
    <h1 class="text-center">Form nhập thông tin cá nhân</h1>
      <input  class="inp-text" type="text" [(ngModel)] = "fname" placeholder="first name">
      <div>
        <input class="inp-text" type="text" [(ngModel)] = "lname" placeholder="last name">
      </div>
      <div >
        <input class="inp-text" type="text" [(ngModel)] = "age" placeholder="age">
      </div>
      <div >
        <textarea class="inp-text" [(ngModel)] = "address" placeholder="address"></textarea>
      </div>
      <br>
      Full name: {{fname}} {{lname}}
      <br>
      Age: {{age}}
      <br>
      Address: {{address}}
      <br>
      <event></event> </div>`,
  styles:['.inp-text{border-radius: 4px; margin-top: 10px; height: 35px;} .body{margin-left: 100px;}']
})
export class AppComponent {
}
