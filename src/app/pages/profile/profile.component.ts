//Interfaccia
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
  constructor()
  {

  }


  ngOnInit(): void
  {}

  getProfileData()
  {}

}
