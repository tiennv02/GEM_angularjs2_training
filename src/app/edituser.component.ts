import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import {Subscription} from "rxjs";
import {UserService} from "./service/user.service"

@Component({
    selector: 'edituser',
    templateUrl: "./edituser.component.html",
    styles:['.inp-text{border-radius: 4px; margin-top: 10px; height: 35px;} .body{margin-left: 100px;}']
})
export class EditUserComponent implements OnInit, OnDestroy{
    public id:number;
    public subscription: Subscription;

    public user: any;
    constructor(
      private router: Router, private activatedRoute:ActivatedRoute, private userService:UserService
    ){

    }
    ngOnInit() {
        this.subscription=this.activatedRoute.params.subscribe(params => {
            this.id=params['id'];
        });
        this.userService.GetSingle(this.id).subscribe((data)=> {
            this.user=data;
        });

    }
    Saveform(){
        this.userService.Update(this.id, this.user).subscribe(response=>{
            if(response){
                alert("Save OK!");
                this.router.navigate(['']);
            }
        })
    }
    Gotouser(){
        this.router.navigate(['']);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
