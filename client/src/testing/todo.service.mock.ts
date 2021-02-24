import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../app/todo/todo';
import { TodoService } from '../app/todo/todo.service';

/**
 * A "mock" version of the `TodoService` that can be used to test components
 * without having to create an actual service.
 */
@Injectable()
export class MockTodoService extends TodoService {
  static testTodos: Todo[] = [
    {
      _id: 'blanche_id',
      owner: 'Blanche',
      status: false,
      body: 'blah',
      category: 'software design'
    },
    {
      _id: 'fry_id',
      owner: 'Fry',
      status: false,
      body: 'blah blah',
      category: 'video games'
    },
    {
      _id: 'barry_id',
      owner: 'Barry',
      status: true,
      body: 'This is the test body.',
      category: 'homework'
    }
  ];

  constructor() {
    super(null);
  }

  // This function should actually filter by status,
  // but all attempts at getting that to work have failed
  getTodos(filters?: { status?: string }): Observable<Todo[]> {
    return of(MockTodoService.testTodos);
  }

  getTodoById(id: string): Observable<Todo> {
    if (id === MockTodoService.testTodos[0]._id) {
      return of(MockTodoService.testTodos[0]);
    } else {
      return of(null);
    }
  }

}
