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
      console.log("Primo subscribe")
      this.profileData = data
      this.experienceSrv.setUserId(data._id)

      this.experienceSrv.getExperiences().subscribe(((data) =>
      {
        console.log("ciao")
        this.experienceData = data
        console.log(data)
      }))

    });





  }

  getProfileData() {}
}
