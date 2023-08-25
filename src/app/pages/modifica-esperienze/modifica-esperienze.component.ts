import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  IUpdateExperience,
  Iexperiences,
} from 'src/app/interfaces/iexperiences';
import { IProfile } from 'src/app/interfaces/iprofile';
import { ExperienceService } from 'src/app/services/experience.service';
import { StriveApiService } from 'src/app/services/strive-api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modifica-esperienze',
  templateUrl: './modifica-esperienze.component.html',
  styleUrls: ['./modifica-esperienze.component.css'],
})
export class ModificaEsperienzeComponent implements OnInit {
  id!: string;
  profileData?: IProfile;
  experienceData: IUpdateExperience = {
    role: '',
    company: '',
    startDate: '',
    endDate: '', // could be null
    description: '',
    area: '',
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public experienceSrv: ExperienceService,
    public striveSrv: StriveApiService
  ) {}
  deleteExperience() {
    this.experienceSrv.removeExperience(this.id).subscribe((res) => {
      console.log('cancellato');
      this.experienceSrv.getExperiences().subscribe((data) => {});
    });
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => (this.id = params.get('id')!));
    this.striveSrv.getProfile().subscribe((data) => {
      this.profileData = data;
      this.experienceSrv.setUserId(data._id);

      this.experienceSrv.getExperiences().subscribe((data) => {
        this.experienceData = data[0];
        console.log(this.experienceData.startDate);
      });
    });
  }
  onSubmit(form: NgForm) {
    if (form && form.valid) {
      console.log(this.experienceData);

      this.experienceSrv
        .updateExperience(this.id, this.experienceData)
        .subscribe((data) => console.log(data));
    }
  }
}
