import { Component, } from '@angular/core';

@Component ({
    selector: 'structural',
    // templateUrl: './structural.component.html',
    template: `
        <h1 *ngIf="showLine">vi du NGif.</h1>
        <div [ngSwitch]="color">
            <p *ngSwitchCase="'red'">This line color is red</p>
            <p *ngSwitchCase="'blue'">This line color is blue</p>
            <p *ngSwitchCase="'green'">This line color is green</p>
            <p *ngSwitchDefault>Invalid color</p>
        </div>
        <ul>
            <li *ngFor="let color of colors">{{color}}</li>
        </ul>
        <h2>jhdfs</h2>
    `
})
export class StructuralComponent {
    public showLine = true;
    public color = "23232";
    public colors: string[] = ["red","green","blue"];
}

// ////////////////////
