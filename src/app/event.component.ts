import { Component } from '@angular/core';

@Component({
    selector: 'event',
    template:`
        <hr>
        <h1>Demo Event binding</h1>
        <button style="margin-top: 10px;" type="button" (click)="onClick()">Click me</button>
        <p style="height: 35px; width:100px; background-color: orange; margin-top: 10px;" (mouseover)="mouseOver()">Mouseover me</p>
        <input style="margin-top: 10px;" type="text" (change)="onChange()" placeholder="Change me"/>`
})
export class EventComponent {
    onClick() {
        alert('You clicked me');
    }
    mouseOver() {
        alert('You mouseovered me');
    }
    onChange() {
        alert('You changed me');
    }
}
