import { Component, OnInit } from '@angular/core';
import { Post } from '../entities/post';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  id: number;
  post: Post;
  constructor(private route: ActivatedRoute,private router: Router,
    private postService: PostService) { }

  ngOnInit() {
    this.post = new Post();

    this.id = this.route.snapshot.params['id'];
    this.postService.getPost(this.id)
      .subscribe(data => {
        console.log(data)
        this.post = data;
      }, error => console.log(error));
  }
  list(){
    this.router.navigate(['/posts']);
  }
like(id:number){
  this.postService.like(id).subscribe(data => console.log(data), error => console.log(error));
  location. reload() 
}
}
