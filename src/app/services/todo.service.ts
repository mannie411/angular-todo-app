import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {HttpClient, HttpHeaders} from '@angular/common/http'

import { Todo } from "../models/Todo";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'   
})
export class TodoService {

  todoUrl:string = 'http://jsonplaceholder.typicode.com/todos'
  todoLimit = '?_limit=6'

  constructor(private http:HttpClient) { } 

  getTodo():Observable<Todo[]>{
    return this.http.get<Todo[]>(`${this.todoUrl}${this.todoLimit}`);
  }
  
  toggleCompleted(todo: Todo):Observable<any>{
    const url =`${this.todoUrl}/${todo.id}`
 
    return this.http.put(url, todo, httpOptions);

  }

  deleteTodo(todo: Todo):Observable<any>{
    const url =`${this.todoUrl}/${todo.id}`

    return this.http.delete<Todo>(url, httpOptions )
  }

  addTodo(todo:Todo):Observable<Todo>{

    return this.http.post<Todo>(this.todoUrl, todo, httpOptions )
  }
}
  