import { Routes, RouterModule} from '@angular/router';
import { PaginationComponent } from './pagination.component';

const routing:Routes = [
    {path: '', component: PaginationComponent}
];
export const appRoutes = RouterModule.forRoot(routing);