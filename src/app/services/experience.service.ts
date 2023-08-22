import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Token } from '../environment/token';
import { HttpClient } from '@angular/common/http';
import { IUpddateExperience, Iexperiences } from '../interfaces/iexperiences';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService
{

  userId :string = ""
  readonly url:string = `https://striveschool-api.herokuapp.com/api/profile/${this.userId}/experiences`
  token:string = ""

  constructor
  (
    private http: HttpClient,
  )
  {
    this.token = new Token().token
  }

  getExperience(): Observable<Iexperiences>
  {
    return this.http.get<Iexperiences> ( this.url,
      { headers: {Authorization:  `Bearer ${this.token}`}}
    )
  }

  getExperiences(): Observable<Iexperiences[]>
  {
    return this.http.post<Iexperiences[]>(`${this.url}/`,
      { headers: {Authorization: `Bearer ${this.token}`} })
  }

  updateExperience(experienceId: string, experience: IUpddateExperience): Observable<IUpddateExperience>
  {
    return this.http.put<Iexperiences>
    (
      `${this.url}/${experienceId}`,
      experience,
      { headers: {Authorization:  `Bearer ${this.token}`}}
    )
  }

  setExperience(experience: IUpddateExperience): Observable<IUpddateExperience>
  {
    return this.http.post<Iexperiences>
    (
      `${this.url}`,
      experience,
      { headers: {Authorization:  `Bearer ${this.token}`}}
    )
  }

  removeExperience(experienceId: string): Observable<IUpddateExperience>
  {
    return this.http.put<Iexperiences>
    (
      `${this.url}/${experienceId}`,
      { headers: {Authorization:  `Bearer ${this.token}`}}
    )
  }

}

