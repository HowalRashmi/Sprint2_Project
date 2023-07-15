import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
  private addBook="http://localhost:1234/Book/addbook";
  private getAllBooks="http://localhost:1234/Book/getAllbooks";
  private getById="http://localhost:1234/Book/getBook";
  private updatebook="http://localhost:1234/Book/updatebook";
  private deletebook="http://localhost:1234/Book/deletebook";

  constructor(private httpclient:HttpClient) { }

  createBook(book:Book):Observable<Object>{
    return this.httpclient.post(`${this.addBook}`, book);
  }
  getAllBookList():Observable<Book[]>{
    return this.httpclient.get<Book[]>(`${this.getAllBooks}`);
  }
  getBookById(bid:number):Observable<Book>{
    return this.httpclient.get<Book>(`${this.getById}/${bid}`);
  }

  updateBook(id:number,book:Book):Observable<Object>{
    return this.httpclient.put(`${this.updatebook}/${id}`,book);
  }

  deleteBook(id: number):Observable<Object>{
    return this.httpclient.delete(`${this.deletebook}/${id}`);
  }
}
