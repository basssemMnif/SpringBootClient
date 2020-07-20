import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../post';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';

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
}
