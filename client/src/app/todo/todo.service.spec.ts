import { TestBed } from '@angular/core/testing';
import { TodoService } from './todo.service';
import { Todo } from './todo';
import { HttpClient} from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('TodoService', () => {
  const testTodos: Todo[] = [
    // test users
  {
    _id: '58895985a22c04e761776d54',
    owner: 'Blanche',
    status: false,
    body: 'In sunt ex non tempor cillum commodo amet incididunt anim qui commodo quis. Cillum non labore ex sint esse.',
    category: 'software design'
  },
  {
    _id: '58895985c1849992336c219b',
    owner: 'Fry',
    status: false,
    body: 'Ipsum esse est ullamco magna tempor anim laborum non officia deserunt veniam commodo. Aute minim incididunt ex commodo.',
    category: 'video games'
  },
  {
    _id: '58895985ae3b752b124e7663',
    owner: 'Fry',
    status: true,
    body: 'Ullamco irure laborum magna dolor non. Anim occaecat adipisicing cillum eu magna in.',
    category: 'homework'
  },
];
let todoService: TodoService;

// These are used to mock the HTTP requests
let httpClient: HttpClient;
let httpTestingController: HttpTestingController;

  beforeEach(() => {
    // Set up the mock handling of the HTTP requests
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    todoService = new TodoService(httpClient);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(todoService).toBeTruthy();
  });
});
