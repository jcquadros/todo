import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../../interfaces/todo-item';
import { InputButtonUnitComponent } from '../input-button-unit/input-button-unit.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { CommonModule } from '@angular/common';
import { TodoListService } from '../../services/todo-list.service';
import { TodoManagerComponent } from '../todo-manager/todo-manager.component';

@Component({
  selector: 'app-list-manager',
  standalone: true,
  imports: [TodoItemComponent, InputButtonUnitComponent, CommonModule, TodoManagerComponent],
  templateUrl: './list-manager.component.html',
  styleUrl: './list-manager.component.css'
})
export class ListManagerComponent implements OnInit{
  title = 'My To Do List APP'
  todoList: TodoItem[] = [];  
  todoListService: TodoListService;

  constructor(todoListService:TodoListService) { 
    this.todoListService = todoListService;
  }

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title: string) {
    this.todoListService.addItem({ title });
  }


  removeItem(item: TodoItem) {
    this.todoListService.deleteItem(item);
  }
}
