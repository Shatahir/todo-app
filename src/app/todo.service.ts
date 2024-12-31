import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: any[] = JSON.parse(localStorage.getItem('todos') || '[]');

  getTodos() {
    return this.todos;
  }

  addTodo(todo: any) {
    this.todos.push(todo);
    this.updateLocalStorage();
  }

  toggleCompleted(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
    this.updateLocalStorage();
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
    this.updateLocalStorage();
  }

  private updateLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}