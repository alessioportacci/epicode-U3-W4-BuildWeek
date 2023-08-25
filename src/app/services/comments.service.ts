import { Injectable } from '@angular/core';
import { Token } from '../environment/token';
import { HttpClient } from '@angular/common/http';
import { IAggiornaComment, Icomments, IupdateComment } from '../interfaces/icomments';
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

  setComment(comment: IupdateComment): Observable<IupdateComment>
  {
    return this.http.post<Icomments> (`${this.url}`, comment,
    { headers: {Authorization:  `Bearer ${this.token}`}})
  }

  updateComment(commentId:string, comment: IAggiornaComment): Observable<IAggiornaComment>
  {
    return this.http.put<IAggiornaComment> (`${this.url}${commentId}`, comment,
    { headers: {Authorization:  `Bearer ${this.token}`}})
  }

  deleteComment(commentId:string): Observable<IAggiornaComment>
  {
    return this.http.delete<IAggiornaComment> (`${this.url}${commentId}`,
    { headers: {Authorization:  `Bearer ${this.token}`}})
  }

}
