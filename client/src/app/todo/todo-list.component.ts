import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public serverFilteredTodos: Todo[];
  public filteredTodos: Todo[];

  public todoOwner: string;
  public todoCategory: string;
  public todoKeyWord: string;
  public todoStatus: string;
  constructor(private todoService: TodoService, private snackBar: MatSnackBar) { }

  getTodosFromServer() {
      this.todoService.getTodos({
        status: this.todoStatus
      }).subscribe(returnedTodos => {
        this.serverFilteredTodos = returnedTodos;
        this.updateFilter();
      }, _err => {
        this.snackBar.open(
          'Problem contacting the server – try again',
          'OK',
          { duration: 3000 });
      });
  }

  public updateFilter() {
    this.filteredTodos = this.todoService.filterTodos(
      this.serverFilteredTodos, { owner: this.todoOwner, category: this.todoCategory, keyWord: this.todoKeyWord });
  }

  ngOnInit(): void {
    this.getTodosFromServer();
  }
}

