// import {Component} from '@angular/core';
//
// @Component({
//     selector: 'add-list',
//     template: `
//         <input #newtext
//                (keyup.enter)="addtext(newtext.value )"
//                (blur)="addtext (newtext.value); newtext.value='' ">
//
//         <button (click)="addtext(newtext.value)">Thêm</button>
//
//         <ul>
//             <li *ngFor="let text of texts">{{text}}</li>
//         </ul>
//     `
// })
//
// export class AddFormToListComponent {
//     texts = ['hạdkhask', 'hạdkhask', 'hạdkhask'];
//     addtext = (newtext: string) {
//     if(newtext) {
//         this.texts.push(newtext);
//     }
//   }
// }