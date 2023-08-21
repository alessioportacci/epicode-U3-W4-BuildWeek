//Interfaccia
import { StriveApiService } from 'src/app/services/strive-api.service';
import { IProfile } from './../../interfaces/iprofile';


import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit
{
  profileData? : IProfile
  constructor(striveSrv : StriveApiService)
  {

  }


  ngOnInit(): void
  {}

  getProfileData()
  {}

}
