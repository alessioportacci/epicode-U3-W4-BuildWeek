import { Injectable } from '@angular/core';
import { Token } from '../environment/token';
import { HttpClient } from '@angular/common/http';
import { Icomments, IupdateComment } from '../interfaces/icomments';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CommentsService
{

  readonly url:string = `https://striveschool-api.herokuapp.com/api/comments/`
  token:string = new Token().tokenCommenti

  constructor(public http:HttpClient) { }

  getPostComments(postId: string): Observable<Icomments[]>
  {
    return this.http.get<Icomments[]> ( `${this.url}${postId}`,
    { headers: {Authorization:  `Bearer ${this.token}`}})
  }


  getAllComments(): Observable<Icomments[]>
  {
    return this.http.get<Icomments[]> ( `${this.url}`,
    { headers: {Authorization:  `Bearer ${this.token}`}})
  }

  setComment(postId: string, comment: IupdateComment): Observable<Icomments>
  {
    return this.http.post<Icomments> (`${this.url}${postId}`, comment,
    { headers: {Authorization:  `Bearer ${this.token}`}})
  }

}
