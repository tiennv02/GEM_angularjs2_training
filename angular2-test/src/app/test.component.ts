import {Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
        selector: 'test',
        template: `
          <p>Input: {{name}}</p>
        
          <button [disabled]="voted" (click)="vote(true)">Tham Gia </button>
          <button [disabled]="voted" (click)="vote(false)">Không Tham Gia </button>
           Đã vote :{{voted}}

          <p>Input change name: {{namet}}</p>

        `
    })
    export class TestComponent {
        @Input() name:string;
        @Input() namet:string;
        
        @Output() onVote = new EventEmitter<boolean>() ;
        public voted:boolean = false;
        vote(yes:boolean){
            this.voted = true;
            this.onVote.emit(yes);
        }
        setName (namet:string){
            this.namet = namet;
        }
    }

/////////////////////////////////////
