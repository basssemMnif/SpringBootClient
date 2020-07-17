import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }


  getPostsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/posts`);
  }
  getCategoriesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/categories`);
  }
  createPost(post: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/addPost`, post);
  }
  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
