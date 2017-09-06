import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

import {UserService} from "./service/user.service"

@Component({
    selector: 'adduser',
    templateUrl: "./adduser.component.html",
    styles:['.inp-text{border-radius: 4px; margin-top: 10px; height: 35px;} .body{margin-left: 100px;}']
})
export class AddUserComponent implements OnInit{
    public id:number;


    public user: any;
    constructor(
        private router: Router, private activatedRoute:ActivatedRoute, private userService:UserService
    ){

    }
    ngOnInit() {
        this.user={};
    }
    Saveform(){
        this.userService.Add(this.user).subscribe(response=>{
            if(response){
                alert("Add OK!");
                this.router.navigate(['']);
            }
        })
    }
    Gotouser(){
        this.router.navigate(['']);
    }
}
