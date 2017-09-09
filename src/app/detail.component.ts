import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute} from "@angular/router";
import { Subscription } from "rxjs";
@Component({
  selector: 'detail-component',
  templateUrl: './detail.component.html'
})
export class DetailComponent {
	public id: number;
	public subscription:Subscription;
	constructor(private router: Router, private activatedRoute: ActivatedRoute){
		this.subscription = this.activatedRoute.params.subscribe(params=>{
			this.id = params['id'];
			//alert(this.id);
			});
	}

	ngOnInit(){
		//this.subscription = this.activatedRoute.params.subscribe(params=>{
		//	this.id = params['id'];
		//	//alert(this.id);
		//	});
	}

	//GotoDetail(){
	//	this.router.navigate(['page2']);
	//}

	//ngOnDestroy(){

	//}
}
