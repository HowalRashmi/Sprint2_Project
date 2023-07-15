import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service';
import { Route, Router } from '@angular/router';
import { Book } from '../book';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit{
  books!:Book[];

  constructor(private bookservice:BookserviceService,
    private router:Router){

  }
  ngOnInit(): void {
    this.getAllBooks();
  }

  private getAllBooks(){
    this.bookservice.getAllBookList().subscribe(data=>{
      this.books=data;
    });
  }

  updateBook(id: number){
    this.router.navigate(['update-book', id]);  
  }

  deleteBook(id: number){
    this.bookservice.deleteBook(id).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/books']);
      
    });
  }
}
