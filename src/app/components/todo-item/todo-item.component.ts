import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
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
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();

  constructor() { 
    this.item = { title: '', completed: false };
  }

  ngOnInit(): void {
  }

  removeItem(): void{
    this.remove.emit(this.item);
  }
}
