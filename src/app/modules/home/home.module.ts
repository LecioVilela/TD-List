// Modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Componentes
import { HeaderComponent } from './components/header/header.component';
import { TodoButtonDeleteAllComponent } from './components/todo-button-delete-all/todo-button-delete-all.component';
import { TodoInputAddItensComponent } from './components/todo-input-add-itens/todo-input-add-itens.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { LinkedinButtonComponent } from './components/linkedin-button/linkedin-button.component';
import { GithubButtonComponent } from './components/github-button/github-button.component';

// Page
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [HeaderComponent, TodoButtonDeleteAllComponent, TodoInputAddItensComponent, TodoListComponent, HomeComponent, LinkedinButtonComponent, GithubButtonComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
