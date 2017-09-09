///////tuongtac component///////
// import { Component, } from '@angular/core';
// import { TestComponent, } from './test.component';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
  // template:`
  // <p> Vi du Input</p>
  // <input type ="text" #textName (keyup)=(0) />
  // <test [name]="textName.value"></test>
  // <p> Vi du Viewchild</p>
  // <button (click)= "changeName()"> Change name</button>
  // <p> Vi du Output</p>
  // <p> Tham Gia: {{yes}}.Khong Tham Gia: {{no}}</p>
  // <test *ngFor="let listname of names" [name]="listname" (onVote)="parentVote($event)"></test>
  // `,
// })
// export class AppComponent {
//   title = 'hello';
  // public yes:number = 0;
  // public no:number = 0;
  // public names =['A','B','C']
  // parentVote(yes:boolean){
  // if (yes)this.yes++;
  //   else this.no++;
  // }
  // @ViewChild (TestComponent)
  // private testComponent : TestComponent;
  //
  // changeName(){
  //  this.testComponent.setName('xin chao');
//   }
// }
///////////pipes//////////
// import { Component, } from '@angular/core';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'app';
// }

///////////Structural//////////
import { Component, } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
