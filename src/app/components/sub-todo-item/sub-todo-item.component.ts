import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { SubTodoItem } from '../../interfaces/sub-todo-item';

@Component({
  selector: 'app-sub-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './sub-todo-item.component.html',
  styleUrl: './sub-todo-item.component.css'
})
export class SubTodoItemComponent implements OnInit{
  @Input() item: SubTodoItem;
  @Output() remove: EventEmitter<SubTodoItem> = new EventEmitter();

  constructor() { 
    this.item = { title: ''};
  }

  ngOnInit(): void {
  }

  removeItem(): void{
    this.remove.emit(this.item);
  }
}



