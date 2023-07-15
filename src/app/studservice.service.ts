import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudserviceService {
private addstud = "http://localhost:1234/Student/addstud";
private getAllStud = "http://localhost:1234/Student/getAllstud";
private getStudById = "http://localhost:1234/Student/getstud";
private updateStud = "http://localhost:1234/Student/updatestud";
private deleteStud = "http://localhost:1234/Student/deletestud";

  constructor(private httpclient:HttpClient) { }

  createStudent(student:Student): Observable<Object>
  {
    return this.httpclient.post(`${this.addstud}`,student);
  }

  getStudentlist():Observable<Student[]>{
    return this.httpclient.get<Student[]>(`${this.getAllStud}`)
  }

  getStudentByid(id: number):Observable<Student>{
      return this.httpclient.get<Student>(`${this.getStudById}/${id}`);
  }

  updateStudent(id:number,student:Student):Observable<Object>{
    return this.httpclient.put(`${this.updateStud}/${id}`,student);
  }

  deleteStudent(id: number):Observable<Object>{
    return this.httpclient.delete(`${this.deleteStud}/${id}`);
  }
}
