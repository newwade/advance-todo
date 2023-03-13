import { Component } from '@angular/core';
import { Todo } from '../todo';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  todos: Todo[] = [];

  addTaskForm = this.formBuilder.group({
    task: '',
  });

  constructor(private formBuilder: FormBuilder) {}

  addTask() {
    const task = this.addTaskForm.value.task;
    if (task) {
      const todo: Todo = {
        id: 1,
        task: task,
        date: new Date(),
        crossed: false,
      };
      this.todos.push(todo);
      this.addTaskForm.reset();
    }
    else{
      alert("Please add a task")
    }
  }
}
