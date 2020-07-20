import { Component, OnInit } from '@angular/core';
import { Post } from '../entities/post';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
import { Categorie } from '../entities/categorie';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  post: Post = new Post();
  categories: Observable<Categorie[]>;
  submitted = false;
  constructor(private postService: PostService,
    private router: Router) { }

  ngOnInit() {
    this.categories = this.postService.getCategoriesList();
    console.log(this.categories)
  }
  newPost(): void {
    this.submitted = false;
    this.post = new Post();
  }
  save() {
    this.postService.createPost(this.post)
      .subscribe(data => console.log(data), error => console.log(error));
    this.post = new Post();
    this.gotoList();
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.post)
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/posts']);
  }
}
