import { Injectable, ɵɵsetComponentScope } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Token } from '../environment/token';
import { HttpClient } from '@angular/common/http';
import { IUpdateExperience, Iexperiences } from '../interfaces/iexperiences';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService
{

  userId :string = "64e314361f175c0014c558c2"
  readonly url:string = `https://striveschool-api.herokuapp.com/api/profile/${this.userId}/experiences`
  token:string = new Token().token

  constructor
  (
    private http: HttpClient,
  )
  {

  }

  getExperience(): Observable<Iexperiences>
  {
    return this.http.get<Iexperiences> ( this.url,
      { headers: {Authorization:  `Bearer ${this.token}`}}
    )
  }

  getExperiences(): Observable<Iexperiences[]>
  {
    console.log('userid ',this.userId)
    return this.http.get<Iexperiences[]>(`${this.url}`,
            { headers: {Authorization: `Bearer ${this.token}`} })
  }

  updateExperience(experienceId: string, experience: IUpdateExperience): Observable<IUpdateExperience>
  {
    return this.http.put<Iexperiences>
    (
      `${this.url}/${experienceId}`,
      experience,
      { headers: {Authorization:  `Bearer ${this.token}`}}
    )
  }

  setExperience(experience: IUpdateExperience): Observable<IUpdateExperience>
  {
    console.log(experience)
    return this.http.post<Iexperiences>
    (
      `${this.url}`,
      experience,
      { headers: {Authorization:  `Bearer ${this.token}`}}

    ).pipe(tap(res => console.log(res)))
  }

  removeExperience(experienceId: string): Observable<IUpdateExperience>
  {
    return this.http.delete<Iexperiences>
    (
      `${this.url}/${experienceId}`,
      { headers: {Authorization:  `Bearer ${this.token}`}}
    )
  }

}

