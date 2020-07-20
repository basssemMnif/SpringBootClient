import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostUpdateComponent } from './post-update/post-update.component';
import { PostSearchComponent } from './post-search/post-search.component';

const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'posts', component: PostListComponent },
  { path: 'add', component: CreatePostComponent },
  { path: 'details/:id', component: PostDetailsComponent },
  { path: 'update/:id', component: PostUpdateComponent },
  { path: 'search/:cat', component: PostSearchComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
