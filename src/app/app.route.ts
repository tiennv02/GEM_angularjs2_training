import { Routes, RouterModule} from '@angular/router';
import { PaginationComponent } from './pagination.component';
import {UserComponent} from './user.component';
import {EditUserComponent} from './edituser.component';
import {AddUserComponent} from './adduser.component';

const routing:Routes = [
    {path: 'pagination', component: PaginationComponent},
    {path: '', component: UserComponent},
    {path: 'edituser/:id', component: EditUserComponent},
    {path: 'adduser', component: AddUserComponent},
    // {path: '/deleteuser', component: DeleteUserComponent},
];
export const appRoutes = RouterModule.forRoot(routing);