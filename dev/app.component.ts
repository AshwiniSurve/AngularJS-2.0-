import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Hellooooooooooooooooooooo!</p>
        <course></course>
        <author> </author>
       
    `,
    directives: [CoursesComponent,AuthorsComponent]
})
export class AppComponent {

}
