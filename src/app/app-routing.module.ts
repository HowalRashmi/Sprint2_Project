import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBookComponent } from './create-book/create-book.component';
import { BooklistComponent } from './booklist/booklist.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  {path:"create-book", component:CreateBookComponent},
  {path:"booklist", component:BooklistComponent},
  {path:"update-book/:id", component:UpdateBookComponent},
  {path:"create-student", component:CreateStudentComponent},
  {path:"studentlist", component:StudentlistComponent},
  {path:"update-student/:id", component:UpdateStudentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
