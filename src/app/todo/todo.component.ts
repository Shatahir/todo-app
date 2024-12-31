import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  todos = this.todoService.getTodos();
  newTodo = { title: '', description: '', completed: false };

  constructor(private todoService: TodoService) { }

  addTodo() {
    if (this.newTodo.title.trim() === '') {
      alert('Title is required!');
      return;
    }
    this.todoService.addTodo({ ...this.newTodo });
    this.newTodo = { title: '', description: '', completed: false };
  }

  toggleCompleted(index: number) {
    this.todoService.toggleCompleted(index);
  }

  deleteTodo(index: number) {
    this.todoService.deleteTodo(index);
  }
}