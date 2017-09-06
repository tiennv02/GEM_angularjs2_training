import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styles:['.pagination {display: inline-block;} .pagination a {color: black; float: left; padding: 8px 16px; text-decoration: none;}'],
})
export class AppComponent {
}
