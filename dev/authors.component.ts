import {Component} from 'angular2/core'
import {AuthorService} from './author.service'

@Component({
    selector: 'author',
    template: `This is an Authors template
    {{title}}
   <ul>
    <li *ngFor="#author of authors"> 
    {{author}}
    </li>
   </ul>
    `,
    providers: [AuthorService]
})

export class AuthorsComponent{
    title: string = "This is an Authors title";
    authors;
    
    constructor(authorService:AuthorService){
        this.authors = authorService.getAuthors();
    }
}