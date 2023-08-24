import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Inews } from 'src/app/interfaces/inews';
import { CommentsService } from 'src/app/services/comments.service';
import { NewsService } from 'src/app/services/news.service';
import { Icomments } from 'src/app/interfaces/icomments';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit
{
  posts: Inews[] = []
  comments: Icomments [] = []


  constructor
  (
    private postSrv: NewsService,
    private commentsSrv: CommentsService
  )
  {

  }

  ngOnInit(): void
  {
    //this.postSrv.setPost({text: "Sono un post!"}).subscribe(res => console.log(res))
    this.postSrv.getPosts().subscribe(res =>
      {
        this.posts = res.slice(0,35)
        console.log(res.slice(0,35))
      })

    //this.commentsSrv.setComment({comment: "Attaccapanni was here", rate:"3", elementId:"5fc6ba2a0626b5001729ee1d"}).subscribe()
    this.postSrv.getPost("64e7111fad24970014693641").subscribe(res => console.log(res))
  }

  loadComments(postId: string) :void
  {
    console.log(this.comments)
    this.comments = []
    this.commentsSrv.getPostComments(postId).subscribe(res => this.comments = res)
  }

}
