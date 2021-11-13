import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/Services/courses.service';
import { Courses } from 'src/model/Courses';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 private course!:Courses;
  constructor(private courseService:CoursesService) { }
  form: any = {
       
    coursename: null,
    coursetype: null,
    description:null,
    link:null

};
  ngOnInit(): void {
  }
   onSubmit(){
  const {coursename,coursetype,coursedescription,courselink}=this.form;
  this.course={
    name:this.form.coursename,
    type:this.form.coursetype,
    description:this.form.description,
    link:this.form.link
  }
  this.courseService.CreateCourse(this.course).subscribe((data)=>{
    console.log(data);
  })
  }

}
