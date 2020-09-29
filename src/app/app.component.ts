import { Component } from '@angular/core';
import construct = Reflect.construct;
import {HttpClient} from '@angular/common/http';
import {PostsService} from './servis/posts.service';
// @ts-ignore
import {Posts} from './models/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'untitled4';
 outgoingPosts: Posts[];

  constructor() {
  }
}



