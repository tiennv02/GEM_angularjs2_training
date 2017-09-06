// import { Component } from '@angular/core';
// @Component({
//     selector: 'lowerupper-pipe',
//     template: `<div>
//         <label>Name: </label><input #name (keyup)="change(name.value)" type="text">
//         <p>Viết Thường: {{value | lowercase}}</p>
//         <p>Viết Hoa: {{value | uppercase}}</p>
//     </div>`
// })
// export class LowerUpperPipeComponent {
//     value: string;
//     change(value: string) {
//         this.value = value;
//     }
// }
// ////////////
// @Component({
//     selector: 'date-pipe',
//     template: `<div>
//         <p>Today is {{today | date}}</p>
//         <p>Ngày: {{today | date:'fullDate'}}</p>
//         <p>GIờ: {{today | date:'jmZ'}}</p>
//     </div>`
// })
// export class DatePipeComponent {
//     today: number = Date.now();
// }
// /////////////////////
// @Component({
//     selector: 'slice-list-pipe',
//     template: `<ul>
//         <li *ngFor="let i of collection | slice:0:4">{{ i }}</li>
//     </ul>`
// })
// export class SlicePipeListComponent {
//     collection: string[] = ['a', 'b', 'c', 'd'];
// }
// ////////////////////
// @Component({
//     selector: 'date-pipe1',
//     template: `<div>
//         <p>Today is {{today | date | uppercase}}</p>
//         <p>Ngày: {{today | date:'fullDate' | uppercase}}</p>
//         <p>GIờ: {{today | date:'jmZ' | lowercase}}</p>
//     </div>`
// })
// export class DatePipesComponent1 {
//     today: number = Date.now();
// }