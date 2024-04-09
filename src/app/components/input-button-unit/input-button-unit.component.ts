import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  standalone: true,
  imports: [],
  templateUrl: './input-button-unit.component.html',
  styleUrl: './input-button-unit.component.css'
})
export class InputButtonUnitComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();

  title = '';

  constructor() { }

  ngOnInit(): void {
  }

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
    this.title = '';
  }
}
