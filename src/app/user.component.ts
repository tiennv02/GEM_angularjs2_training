import { Component, OnInit } from '@angular/core';
import { UserService} from './service/user.service';

@Component({
    selector: 'user',
    templateUrl:"./user.component.html",
    // styles:['.pagination {display: inline-block;} .pagination a {color: black; float: left; padding: 8px 16px; text-decoration: none;}'],
})
export class UserComponent implements OnInit{
   public users:any[];
    constructor(private userService:UserService){};
    ngOnInit() {
        this.Loaddata();

    }
    Delete(id:number){
        let confirmDel = confirm("Are you sure delete?");
        if(confirmDel) {
            this.userService.Delete(id).subscribe(response=>{
                if(response){
                    alert("Delete success!");
                    this.Loaddata();
                }
            })
        }
    }
    Loaddata(){
        this.userService.GetList().subscribe((response:any) => {
            this.users = response;
        })
    }
}