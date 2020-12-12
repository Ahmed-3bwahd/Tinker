import { Component, OnInit } from '@angular/core';
import blog from './blog';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogMode = 0;
  blogContent = blog;

  constructor() { }

  ngOnInit() {
  }
  onSelectBlog(id:number){
    this.blogMode = id;
  }

}
