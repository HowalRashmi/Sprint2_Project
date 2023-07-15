import { Component } from '@angular/core';
import { Book } from '../book';
import { BookserviceService } from '../bookservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {
  id!: number;
  book:Book = new Book();

  constructor(private bookservice:BookserviceService,private route:ActivatedRoute,private router:Router){}
  ngOnInit(): void {

    this.id=this.route.snapshot.params['id'];

    this.bookservice.getBookById(this.id).subscribe((data:Book)=>{
      this.book=data;
      },(error: any) => console.log(error));

  }

  onSubmit(){
    this.bookservice.updateBook(this.id,this.book).subscribe(data=>{
      console.log(this.book);
      this.router.navigate(['/books']);
    },
    erorr=>console.log(erorr));
  }
}
