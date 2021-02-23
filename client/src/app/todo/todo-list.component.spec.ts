import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MockTodoService } from 'src/testing/todo.service.mock';
import { Todo } from './todo';
import { TodoListComponent } from './todo-list.component';
import { TodoService } from './todo.service';

const COMMON_IMPORTS: any[] = [
  FormsModule,
  MatCardModule,
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule,
  MatButtonModule,
  MatInputModule,
  MatExpansionModule,
  MatTooltipModule,
  MatListModule,
  MatDividerModule,
  MatRadioModule,
  MatSnackBarModule,
  BrowserAnimationsModule,
  RouterTestingModule,
];

describe('TodoListComponent', () => {

  let todoList: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [COMMON_IMPORTS],
      declarations: [ TodoListComponent ],
      providers: [{ provide: TodoService, useValue: new MockTodoService() }]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    todoList = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('contains all the todos', () => {
   expect(todoList.serverFilteredTodos.length).toBe(3);
  });

  it('contains a todo owned by "Blanche"', () => {
    expect(todoList.serverFilteredTodos.some((todo: Todo) => todo.owner === 'Blanche')).toBe(true);
  });

  it('contains a todo owned by "Fry"', () => {
    expect(todoList.serverFilteredTodos.some((todo: Todo) => todo.owner === 'Fry')).toBe(true);
  });

  it('doesn\'t contain a user named "Santa"', () => {
    expect(todoList.serverFilteredTodos.some((todo: Todo) => todo.owner === 'Santa')).toBe(false);
  });

  it('contains all todos with the status "complete"', () => {
    expect(todoList.serverFilteredTodos.filter((todo: Todo) => todo.status === true).length).toBe(1);
  });

  it('contains all todos with the status "incomplete"', () => {
    expect(todoList.serverFilteredTodos.filter((todo: Todo) => todo.status === false).length).toBe(2);
  });
});
