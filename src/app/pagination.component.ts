import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
    selector: 'pagination',
    templateUrl:`./pagination.component.html`,
    styles:['.pagination {display: inline-block;}.pagination a {color: black;float: left;padding: 8px 16px;text-decoration: none;} .pagination a.active {background-color: #4CAF50;color: white;}.pagination a:hover:not(.active) {background-color: #ddd;}'],

})
export class PaginationComponent implements OnInit{
    public pages:number[];
    public currentpage: number;
    constructor(private router:Router, private activatedRouter: ActivatedRoute){

    }

    ngOnInit() {
        this.activatedRouter.queryParams.subscribe(params=>{
            this.currentpage = params['page'] || 1;
            console.log(this.currentpage);
        });
        this.pages = [1, 2, 3, 4, 5];

    }
}
