import { Component, OnInit } from '@angular/core';
import { ExperienceService } from './../../services/experience.service';

import { StriveApiService } from 'src/app/services/strive-api.service';
import { IProfile } from './../../interfaces/iprofile';

import { Iexperiences } from 'src/app/interfaces/iexperiences';

@Component({
  selector: 'app-esperienze',
  templateUrl: './esperienze.component.html',
  styleUrls: ['./esperienze.component.css'],
})
export class EsperienzeComponent implements OnInit {
  profileData?: IProfile;
  experienceData?: Iexperiences[];

  constructor(
    public striveSrv: StriveApiService,
    public experienceSrv: ExperienceService
  ) {}

  ngOnInit(): void {
    this.striveSrv.getProfile().subscribe((data) => {
      console.log('Primo subscribe');
      this.profileData = data;
      this.experienceSrv.setUserId(data._id);

      this.experienceSrv.getExperiences().subscribe((data) => {
        console.log('ciao');
        this.experienceData = data;
        console.log(data);
      });
    });
  }

  getProfileData() {}
}
