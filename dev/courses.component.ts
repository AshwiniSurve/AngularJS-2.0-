import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'

@Component({
    selector: 'course',
    template: `<h2>This is courses template</h2>
       {{title}} 
       
       <ul><input type="text" autoGrow />
        <li *ngFor="#course of courses">
            {{course}}
        </li>
       </ul>   
      `,
      providers: [CourseService],
      directives: [AutoGrowDirective]
})

export class CoursesComponent {
    title: String = "This is a courses title from constructor";
    courses;
   
    constructor(courseService:CourseService){
       this.courses = courseService.getCourses();
   } 
}