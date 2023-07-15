import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudserviceService } from '../studservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit{
  stud!:Student[] ;
  constructor(private studentservice:StudserviceService,private router:Router) {}
  
    ngOnInit(): void{
      this.getStudents();
  
  }
  
    private getStudents(){
      this.studentservice.getStudentlist().subscribe(data =>{ this.stud=data; 
      });
    }
  
    updateStudent(id: number){
      this.router.navigate(['update-student', id]);  
    }
  
    deleteStudent(id: number){
      this.studentservice.deleteStudent(id).subscribe(data=>{
        console.log(data);
        this.router.navigate(['/student']);
      });
    }
}
