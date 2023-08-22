import { ExperienceService } from './../../services/experience.service';
//Interfaccia
import { StriveApiService } from 'src/app/services/strive-api.service';
import { IProfile } from './../../interfaces/iprofile';

import { Component, OnInit } from '@angular/core';
import { Iexperiences } from 'src/app/interfaces/iexperiences';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profileData?: IProfile;
  experienceData?: Iexperiences[]

  constructor
  (
    public striveSrv: StriveApiService,
    public experienceSrv: ExperienceService
  ) {}

  ngOnInit(): void
  {
     this.striveSrv.getProfile().subscribe((data) =>
     {
       console.log(data)
       this.profileData = data
       this.experienceSrv.userId = data._id

       this.experienceSrv.getExperiences().subscribe(((data) =>
       {
         this.experienceData = data
         console.log('esperienza', data)
       }))

     })

  }

  getProfileData() {}
}
