import {Component, OnInit} from '@angular/core';
import {StudentService} from '../services/student.service';

@Component({
    selector: 'app-my-list-student',
    templateUrl: './my-list-student.component.html',
    styleUrls: ['./my-list-student.component.css'],
    providers: [StudentService],
})

export class MyListStudentComponent implements OnInit {
    public studentList: any[];

    constructor(private studentService: StudentService) {
    }

    ngOnInit() {
        this.studentList = this.studentService.getList();
    }

}
