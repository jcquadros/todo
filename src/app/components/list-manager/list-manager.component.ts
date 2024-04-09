import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../../interfaces/todo-item';
import { InputButtonUnitComponent } from '../input-button-unit/input-button-unit.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-manager',
  standalone: true,
  imports: [TodoItemComponent, InputButtonUnitComponent, CommonModule],
  templateUrl: './list-manager.component.html',
  styleUrl: './list-manager.component.css'
})
export class ListManagerComponent implements OnInit{
  title = 'My To Do List APP'

  todoList: TodoItem[] = [
    {title: 'Cachorro caramelo'},
    {title: 'Gato de botas'},
    {title: 'Sapo cururu'},
    {title: 'Pasta de dente'},
    {title: 'Sabonete'},
    {title: 'Shampoo'},
    {title: 'Condicionador'},
    {title: 'Patati'},
    {title: 'Patata'},

  
  ];

  constructor() { }

  ngOnInit() {
  }

  addItem(title: string) {
    this.todoList.push({ title })
  }
}
