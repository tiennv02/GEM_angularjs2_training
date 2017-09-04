// import {Component,Input,Output,EventEmitter} from '@angular/core';
// @Component({
//         selector: 'test',
//         template: `
//           <p>Input: {{name}}</p>
//
//           <button [disabled]="voted" (click)="vote(true)">Tham Gia </button>
//           <button [disabled]="voted" (click)="vote(false)">Không Tham Gia </button>
//            Đã vote :{{voted}}
//
//           <p>Input change name: {{namet}}</p>
//
//         `
//     })
//     export class TestComponent {
//         @Input() name:string;
//         @Input() namet:string;
//
//         @Output() onVote = new EventEmitter<boolean>() ;
//         public voted:boolean = false;
//         vote(yes:boolean){
//             this.voted = true;
//             this.onVote.emit(yes);
//         }
//         setName (namet:string){
//             this.namet = namet;
//         }
//     }
// /////////////////////////////////////
// @Component({
//     selector: 'lowerupper-pipe',
//     template: `<div>
//         <label>Name: </label><input #name (keyup)="change(name.value)" type="text">
//         <p>In lowercase: {{value | lowercase}}</p>
//         <p>In uppercase: {{value | uppercase}}</p>
//     </div>`
// })
// export class LowerUpperPipeComponent {
//     value: string;
//     change(value: string) {
//         this.value = value;
//     }
// }
// ////////////////////
// @Component({
//     selector: 'date-pipe',
//     template: `<div>
//         <p>Today is {{today | date}}</p>
//         <p>Or if you prefer, {{today | date:'fullDate'}}</p>
//         <p>The time is {{today | date:'jmZ'}}</p>
//     </div>`
// })
// export class DatePipeComponent {
//     today: number = Date.now();
// }
// ///////////////////////////
// @Component({
//     selector: 'slice-list-pipe',
//     template: `<ul>
//         <li *ngFor="let i of collection | slice:1:3">{{ i }}</li>
//     </ul>`
// })
// export class SlicePipeListComponent {
//     collection: string[] = ['a', 'b', 'c', 'd'];
// }