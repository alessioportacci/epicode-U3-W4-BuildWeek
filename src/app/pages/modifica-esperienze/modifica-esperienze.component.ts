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
  idExperience!: string;
  profileData?: IProfile;
  experienceData: Iexperiences = {
    _id: '', // server generated
    role: '',
    company: '',
    startDate: '',
    endDate: '', // could be null
    description: '',
    area: '',
    username: '', // server generated
    createdAt: '', // server generated
    updatedAt: '', // server generated
    __v: -1, // server generated
    image: '',
  };

  constructor(
    private route: ActivatedRoute,
    public experienceSrv: ExperienceService,
    public striveSrv: StriveApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params) => (this.idExperience = params.get('id')!)
    );
    console.log(this.experienceData);

    this.striveSrv.getProfile().subscribe((profile) => {
      this.profileData = profile;

      this.experienceSrv.userId = this.profileData._id;
      this.experienceSrv
        .getExperience(this.idExperience)
        .subscribe((experience) => {
          console.log(experience);

          this.experienceData = experience;
        });
    });
  }

  deleteExperience() {
    this.experienceSrv.removeExperience(this.idExperience).subscribe((res) => {
      console.log('cancellato');
      this.router.navigate([`profile/esperienze`]);
    });
  }

  onSubmit(form: NgForm) {
    if (form && form.valid) {
      console.log(this.experienceData);
      const updateExperice: IUpdateExperience = {
        role: this.experienceData.role,
        company: this.experienceData.company,
        startDate: this.experienceData.startDate,
        endDate: this.experienceData.endDate,
        description: this.experienceData.description,
        area: this.experienceData.area,
      };

      console.log(this.idExperience);

      this.experienceSrv
        .updateExperience(this.idExperience, updateExperice)
        .subscribe((data) => console.log(data));
    }
  }
}
