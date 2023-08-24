import { ExperienceService } from './../../services/experience.service';
//Interfaccia
import { StriveApiService } from 'src/app/services/strive-api.service';
import { IProfile } from './../../interfaces/iprofile';


import { Component, OnInit } from '@angular/core';
import { IUpdateExperience, Iexperiences } from 'src/app/interfaces/iexperiences';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profileData?: IProfile;
  experienceData?: Iexperiences[]

  role: string = '';
  company:string='';
  startDate:string='';
  endDate:string='';
  description:string='';
  area:string='';



  constructor
  (
    public striveSrv: StriveApiService,
    public experienceSrv: ExperienceService,

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


  onSubmit(form: NgForm): void {
    if (form && form.valid) {
      console.log(form.value);
      const experienceData = {
            role: form.value.role,
            company: form.value.company,
            startDate: form.value.startDate,
            endDate: form.value.endDate,
            description: form.value.description,
            area: form.value.area,
      };

      this.submitExperience(experienceData);


      form.reset();
    }
  }


  submitExperience(experience: any): void {
    this.experienceSrv.setExperience(experience).subscribe((response) => {
      console.log('Esperienza aggiunta:', response);
      this.experienceSrv.getExperiences().subscribe(((data) =>
      {
        this.experienceData = data
        console.log('esperienza', data)
      }))
  })}

  getProfileData() {}
}
