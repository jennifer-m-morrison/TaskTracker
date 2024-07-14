import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { AboutComponent } from './components/about/about.component';

// const appRoutes: Routes = [
//     { path: '', component: TasksComponent },
//     { path: 'about', component: AboutComponent }
// ];


export const appRoutes: Routes = [
    { path: '', component: TasksComponent },
    { path: 'about', component: AboutComponent }

];

