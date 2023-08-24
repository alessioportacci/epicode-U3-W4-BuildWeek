import { Injectable } from '@angular/core';
import { Token } from '../environment/token';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  token = new Token().token2;
  constructor(private http: HttpClient) {}
  getPOst() {
    return this.http.get('https://striveschool-api.herokuapp.com/api/posts/', {
      headers: { Authorization: `Bearer ${this.token}` },
    });
  }
  addPost() {
    return this.http.post('https://striveschool-api.herokuapp.com/api/posts/', {
      headers: { Authorization: `Bearer ${this.token}` },
    });
  }
}
