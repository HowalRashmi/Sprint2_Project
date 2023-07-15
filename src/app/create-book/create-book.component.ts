import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookserviceService } from '../bookservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit{
book:Book=new Book();
constructor(private bookservice:BookserviceService,
  private router:Router){ };

  ngOnInit(): void {    
  }

  saveBook(){
    this.bookservice.createBook(this.book).subscribe(data =>{
      console.log(data);
      this.goToBookList();
    },
    error=>console.log(error));
  }

  goToBookList(){
    this.router.navigate(['/booklist']);
  }

  onSubmit(){
    console.log(this.book);
    this.saveBook();
    this.router.navigate(['/booklist']);
  }
  
  
}
