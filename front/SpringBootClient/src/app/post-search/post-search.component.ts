import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../entities/post';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-search',
  templateUrl: './post-search.component.html',
  styleUrls: ['./post-search.component.scss']
})
export class PostSearchComponent implements OnInit {
  posts: Observable<Post[]>;
  cat:string;
  constructor(private route: ActivatedRoute,private router: Router,
    private postService: PostService) { }

  ngOnInit() {
    this.cat=this.route.snapshot.params['cat'];
    this.posts=this.postService.search(this.cat);
  }
  list(){
    this.router.navigate(['/posts']);
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
