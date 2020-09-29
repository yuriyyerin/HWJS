import {Component, Input, OnInit} from '@angular/core';

import {Posts} from '../../models/posts';
import {PostsService} from '../../servis/posts.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  posts: Posts[];


  constructor(private postsService: PostsService) {
    this.postsService.getAllPosts().subscribe(value =>
      this.posts = value);
  }

  ngOnInit(): void {
  }

}
