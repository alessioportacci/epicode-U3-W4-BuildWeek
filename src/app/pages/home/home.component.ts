import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Inews } from 'src/app/interfaces/inews';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit
{
  posts: Inews[] = []

  constructor(private postSrv: NewsService)
  {

  }

  ngOnInit(): void
  {
    //this.postSrv.setPost({text: "Sono un post!"}).subscribe(res => console.log(res))
    this.postSrv.getPosts().subscribe(res => {this.posts = res
    console.log(res)})
    this.postSrv.getPost("64e7111fad24970014693641").subscribe(res => console.log(res))
  }

}
