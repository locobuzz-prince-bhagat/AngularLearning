import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http:HttpClient) { }
  
  getPosts():Observable<any>{
    return this.http.get(this.apiUrl);
  }
  createPost(post:any):Observable <any>{

    return this.http.post(this.apiUrl,post);
  }
  updatePost(postid:number,updatedPost:any):Observable<any>{
    return this.http.put(`${this.apiUrl}/${postid}`,updatedPost);
  }
  deletePost(postid:number):Observable<any>{
    return this.http.delete(`${this.apiUrl}/${postid}`);
  }
   getPostById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
