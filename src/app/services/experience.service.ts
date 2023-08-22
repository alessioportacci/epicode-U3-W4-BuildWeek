import { Token } from 'src/app/environment/token';
import { Injectable, ɵɵsetComponentScope } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUpdateExperience, Iexperiences } from '../interfaces/iexperiences';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService
{

  userId :string= ""

  readonly url:string = `https://striveschool-api.herokuapp.com/api/profile/${this.userId}/experiences`
  token:string = new Token().token

  constructor
  (
    private http: HttpClient,
  )
  {

  }

  setUserId(id: string)
  {
    this.userId = id
  }

  getExperience(): Observable<Iexperiences>
  {
    return this.http.get<Iexperiences> ( `https://striveschool-api.herokuapp.com/api/profile/${this.userId}/experiences`,
      { headers: {Authorization:  `Bearer ${this.token}`}}
    )
  }

  getExperiences(): Observable<Iexperiences[]>
  {
    console.log('userid ',this.userId)
    return this.http.get<Iexperiences[]>(`https://striveschool-api.herokuapp.com/api/profile/${this.userId}/experiences`,
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
      `https://striveschool-api.herokuapp.com/api/profile/${this.userId}/experiences`,
      experience,
      { headers: {Authorization:  `Bearer ${this.token}`}}

    ).pipe(tap(res => console.log(res)))
  }

  removeExperience(experienceId: string): Observable<IUpdateExperience>
  {
    return this.http.delete<Iexperiences>
    (
      `https://striveschool-api.herokuapp.com/api/profile/${this.userId}/experiences/${experienceId}`,
      { headers: {Authorization:  `Bearer ${this.token}`}}
    )
  }

}

