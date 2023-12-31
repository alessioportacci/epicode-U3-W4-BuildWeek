import { Component, OnInit } from '@angular/core';
import { ExperienceService } from './../../services/experience.service';

import { StriveApiService } from 'src/app/services/strive-api.service';
import { IProfile } from './../../interfaces/iprofile';

import { Iexperiences } from 'src/app/interfaces/iexperiences';
import { Router } from '@angular/router';

@Component({
  selector: 'app-esperienze',
  templateUrl: './esperienze.component.html',
  styleUrls: ['./esperienze.component.css'],
})
export class EsperienzeComponent implements OnInit {
  profileData?: IProfile;
  experienceData?: Iexperiences[];
  utente: IProfile[] = [];
  constructor(
    public striveSrv: StriveApiService,
    public experienceSrv: ExperienceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.striveSrv.getProfile().subscribe((data) => {
      this.profileData = data;
      this.experienceSrv.setUserId(data._id);

      this.experienceSrv.getExperiences().subscribe((data) => {
        this.experienceData = data;
      });
    });
    this.getUsers();
    //   Side bar
    //   getUsers() {
    //     this.postSrv.getUsers().subscribe((data) => {
    //       this.utente = data.reverse().slice(0, 6);
    //     });
    //   }
  }
  getUsers() {
    this.striveSrv.getUsers().subscribe((data) => {
      this.utente = data.reverse().slice(0, 6);
    });
  }
  deleteExperience(id: string) {
    this.experienceSrv.removeExperience(id).subscribe((res) => {
      console.log('cancellato');
    });
  }
  modifica(id: string) {
    this.router.navigate([`modifica/${id}`]);
  }
}
