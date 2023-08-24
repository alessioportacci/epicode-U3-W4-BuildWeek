import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Inews } from 'src/app/interfaces/inews';
import { CommentsService } from 'src/app/services/comments.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit
{
  posts: Inews[] = []

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
        this.posts = res
        console.log(res)
      })

    this.commentsSrv.getAllComments().subscribe(res => console.log('commenti', res))
    this.commentsSrv.setComment("60eefaa150783f00150a3fce", {comment: "Il primo commento belissimo"}).subscribe()
    this.commentsSrv.getPostComments("60eefaa150783f00150a3fce").subscribe(res => console.log('commenti', res))

    this.postSrv.getPost("64e7111fad24970014693641").subscribe(res => console.log(res))
  }

}
