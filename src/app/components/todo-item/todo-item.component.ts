import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from '../../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit{
  @Input() item: TodoItem;

  constructor() { 
    this.item = { title: '', completed: false };
  }

  ngOnInit(): void {
  }
}
