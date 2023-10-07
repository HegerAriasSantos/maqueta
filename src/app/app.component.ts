import { Component, HostBinding } from '@angular/core';
import { Carousel, Dropdown, initTE, Collapse } from 'tw-elements';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newTodoText = '';
  todos: Todo[] = [];
  darkMode = true;
  @HostBinding('class.dark') get mode() {
    return this.darkMode;
  }

  constructor() {}

  ngOnInit() {
    initTE({ Carousel, Dropdown, Collapse });
  }

  addTodo(): void {
    if (this.newTodoText.trim() !== '') {
      const newTodo: Todo = {
        id: Date.now(),
        text: this.newTodoText,
        completed: false,
      };
      this.todos.push(newTodo);
      this.newTodoText = '';
    }
  }

  toggleTodo(todo: Todo): void {
    todo.completed = !todo.completed;
  }

  deleteTodo(todo: Todo): void {
    const index = this.todos.findIndex((t) => t.id === todo.id);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}
