import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Router, ActivatedRoute} from '@angular/router'
@Component({
  selector: 'detail-pagelike-component',
  templateUrl: './detail-pagelike.component.html'
})
export class DetailPagelikeComponent implements OnInit{
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
