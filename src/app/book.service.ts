import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.apiUrl + 'books');
  }

  getOneById(id) {
    return this.http.get(this.apiUrl + id);
  }
}
