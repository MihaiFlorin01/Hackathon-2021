import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/Services/courses.service';
import { Courses } from 'src/model/Courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private courseService:CoursesService) { }
    courses!:Courses[];
  ngOnInit(): void {
    this.courseService.GetAllCourses().subscribe(data=>{
      if (data != null) {
      console.log(data);
      this.courses=data;
      }
    });
  }

}
