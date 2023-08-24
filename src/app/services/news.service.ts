import { Injectable } from '@angular/core';
import { Inews, IupdateNews } from '../interfaces/inews';
import { HttpClient } from '@angular/common/http';
import { Token } from '../environment/token';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  readonly url: string = `https://striveschool-api.herokuapp.com/api/posts/`;
  token: string = new Token().token;

  constructor(public http: HttpClient) {}

  getPost(postId: string): Observable<Inews> {
    return this.http.get<Inews>(`${this.url}${postId}`, {
      headers: { Authorization: `Bearer ${this.token}` },
    });
  }

  getPosts(): Observable<Inews[]> {
    return this.http.get<Inews[]>(`${this.url}`, {
      headers: { Authorization: `Bearer ${this.token}` },
    });
  }

  setPost(post: IupdateNews): Observable<Inews> {
    return this.http.post<Inews>(`${this.url}`, post, {
      headers: { Authorization: `Bearer ${this.token}` },
    });
  }

  updatePost(post: IupdateNews, postId: string): Observable<Inews> {
    return this.http.put<Inews>(`${this.url}${postId}`, post, {
      headers: { Authorization: `Bearer ${this.token}` },
    });
  }

  removePost(postId: string): Observable<Inews> {
    return this.http.delete<Inews>(`${this.url}${postId}`, {
      headers: { Authorization: `Bearer ${this.token}` },
    });
  }
}
