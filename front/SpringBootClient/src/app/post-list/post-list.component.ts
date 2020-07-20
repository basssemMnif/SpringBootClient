import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { Observable } from 'rxjs';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: Observable<Post[]>;
  constructor(private postService: PostService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
    this.posts = this.postService.getPostsList();
    console.log(this.posts)
  }
  reloadData() {
    this.posts = this.postService.getPostsList();
  }
  deletePost(id: number) {
    this.postService.deletePost(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  PostDetails(id: number){
    this.router.navigate(['details', id]);
  }
  PostUpdate(id:number){
    this.router.navigate(['update', id]);
  }

}
