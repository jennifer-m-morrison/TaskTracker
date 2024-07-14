import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule, provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TaskService } from './services/task.service';
import { TasksComponent } from './components/tasks/tasks.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AboutComponent } from './components/about/about.component';

const appRoutes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  declarations: [AppComponent, HeaderComponent, ButtonComponent, TasksComponent, AddTaskComponent, TaskItemComponent, AboutComponent],
  imports: [
    BrowserModule, 
    CommonModule, 
    HttpClientModule, 
    FontAwesomeModule, 
    FormsModule, 
    RouterModule.forRoot(appRoutes, { enableTracing: true })],
    providers: [TaskService, provideHttpClient()],
  bootstrap: [AppComponent]
})

export class AppModule { }
