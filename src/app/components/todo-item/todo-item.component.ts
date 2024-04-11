import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { TodoItem } from '../../interfaces/todo-item';
import { SubTodoItem } from '../../interfaces/sub-todo-item';
import { SubTodoItemComponent } from '../sub-todo-item/sub-todo-item.component';
import { CommonModule } from '@angular/common';
import { InputButtonUnitComponent } from '../input-button-unit/input-button-unit.component';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [SubTodoItemComponent, CommonModule, InputButtonUnitComponent],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit{
  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();
  @Output() update: EventEmitter<SubTodoItem> = new EventEmitter();

  constructor() { 
    this.item = { title: '', completed: false, subItems: []};
  }

  ngOnInit(): void {
  }

  addSubItem(title : string): void{
    if (this.item.subItems && title.length > 0){
      this.item.subItems.push({title});
    }

    console.log(this.item);
    this.update.emit(this.item);
  }

  removeItem(): void{
    this.remove.emit(this.item);
  }

  removeSubItem(subItem: SubTodoItem): void{
    if (this.item.subItems) {
      const index = this.item.subItems.indexOf(subItem);
      this.item.subItems.splice(index, 1);
      this.update.emit(this.item);
    }
  }
}
