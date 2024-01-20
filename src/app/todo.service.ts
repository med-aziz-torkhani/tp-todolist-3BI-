import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoDetailShowModal=false
  todoUpdateShowModal=false
  todoAddShowModal=false
  
  
  constructor(private httpCLient : HttpClient) { }

  getTodoList():Observable<Todo[]>{
    return this.httpCLient.get<Todo[]>("http://localhost:3000/todos")
  }
  deleteTodo(todo:Todo):Observable<Todo[]>{
  return this.httpCLient.delete<Todo[]>(`http://localhost:3000/todos/${todo.id}`)
  }
  getTodoByid(todo:Todo):Observable<Todo>{
    return this.httpCLient.get<Todo>(`http://localhost:3000/todos/${todo.id}`)
    }
  updateTodo(todo:Todo):Observable<Todo>{
    return this.httpCLient.put<Todo>(`http://localhost:3000/todos/${todo.id}`,todo)
  }
  addTodo(todo:Todo):Observable<Todo[]>{
    return this.httpCLient.post<Todo[]>(`http://localhost:3000/todos`,todo)
  }
}
