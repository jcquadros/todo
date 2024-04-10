import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../../interfaces/todo-item';
import { InputButtonUnitComponent } from '../input-button-unit/input-button-unit.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-manager',
  standalone: true,
  imports: [TodoItemComponent, InputButtonUnitComponent, CommonModule],
  templateUrl: './todo-manager.component.html',
  styleUrl: './todo-manager.component.css'
})
export class TodoManagerComponent {
  title = 'My To Do List APP'
  todoList: TodoItem[] = [];  

  constructor() { }

  addItem(title: string) {
    this.todoList.push({ title });
  }

  removeItem(item: TodoItem) {
    this.todoList.splice(this.todoList.indexOf(item), 1);
  }

  
}
