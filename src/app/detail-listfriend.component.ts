import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Router, ActivatedRoute} from '@angular/router'
@Component({
  selector: 'deatail-listfriend-component',
  templateUrl: './deatail-listfriend.component.html'
})
export class DetailListfriendComponent implements OnInit{
	public parentRouterId:number;
	public sub:Subscription;
	constructor(private router:Router, private activatedRoute:ActivatedRoute){
		this.sub = this.activatedRoute.parent.params.subscribe(params =>{
			this.parentRouterId = params['id'];

		})
	}

	ngOnInit(){
		
	}
}
