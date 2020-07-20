import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.scss']
})
export class PostUpdateComponent implements OnInit {
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
  updateEmployee() {
    this.postService.updatePost( this.post)
      .subscribe(data => console.log(data), error => console.log(error));
    this.post = new Post();
    this.gotoList();
  }

  onSubmit() {
    this.updateEmployee();    
  }

  gotoList() {
    this.router.navigate(['/posts']);
  }
}
