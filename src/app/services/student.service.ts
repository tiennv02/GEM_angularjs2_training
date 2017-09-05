import { Injectable } from '@angular/core';

export class Student {
    id: number;
    name: string;
}

@Injectable()
export class StudentService {
    getList(): Student[] {
        const students = [
            {id: 1, name: 'gg1'},
            {id: 2, name: 'gg2'},
            {id: 3, name: 'gg3'},
        ];
        return students;
    }
}
