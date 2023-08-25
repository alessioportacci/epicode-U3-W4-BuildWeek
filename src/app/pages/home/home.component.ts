import { Subject } from 'rxjs';
import { Component, OnInit, Pipe } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Inews } from 'src/app/interfaces/inews';
import { CommentsService } from 'src/app/services/comments.service';
import { NewsService } from 'src/app/services/news.service';
import { Icomments } from 'src/app/interfaces/icomments';
import { StriveApiService } from 'src/app/services/strive-api.service';
import { IProfile } from 'src/app/interfaces/iprofile';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  posts: Inews[] = [];
  comments: Icomments[] = [];
  profileData?: IProfile;
  currentComment = '';

  constructor(
    private postSrv: NewsService,
    private commentsSrv: CommentsService,
    public striveSrv: StriveApiService
  ) {}

  ngOnInit(): void {
    //this.postSrv.setPost({text: "Sono un post!"}).subscribe(res => console.log(res))
    this.postSrv.getPosts().subscribe((res) => {
      this.posts = res.reverse().slice(0, 35);
      console.log(res.slice(0, 35));
    });

    //this.commentsSrv.setComment({comment: "Attaccapanni was here", rate:"3", elementId:"5fc6ba2a0626b5001729ee1d"}).subscribe()
    this.postSrv
      .getPost('64e7111fad24970014693641')
      .subscribe((res) => console.log(res));

    this.striveSrv.getProfile().subscribe((data) => {
      console.log(data);
      this.profileData = data;
    });
  }

  loadComments(postId: string): void {
    console.log(this.comments);
    this.comments = [];
    this.commentsSrv
      .getPostComments(postId)
      .subscribe((res) => (this.comments = res));
  }

  addComment(postId: string) {
    this.commentsSrv
      .setComment({
        comment: this.currentComment,
        rate: '3',
        elementId: postId,
      })
      .subscribe();
    this.currentComment = '';
    this.loadComments(postId);
  }
}
