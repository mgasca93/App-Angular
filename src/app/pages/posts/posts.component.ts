import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any;
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
  }

  escucharEvento( id ){
    console.log('Click me : ' , id);
  }
}
