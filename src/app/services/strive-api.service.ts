import { Injectable } from '@angular/core';
//Interfaccia
import { IProfile, IUpdateProfile } from 'src/app/interfaces/iprofile';
//Token
import { Token } from '../environment/token';
//Http
import { HttpClient } from '@angular/common/http';
//Tap
import { Observable, retry, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StriveApiService {
  readonly url: string = 'https://striveschool-api.herokuapp.com/api/profile';
  token: string = '';

  constructor(private http: HttpClient) {
    this.token = new Token().token;
    this.getUsers();
    this.getUser('609a57ecdfccc50015a6bbb8');
    this.getProfile();
    /*
    this.setUser({  name: "Alessio2",
                    surname   : "Portacci2",
                    email     : "ciao@gmail.com",
                    bio       : "Sono una bio",
                    title     : "student @ strive school 2",
                    area      : "Roma2",
                  })
    */
  }

  getUser(userId: string): Observable<IProfile> {
    return this.http.get<IProfile>(`${this.url}/${userId}`, {
      headers: { Authorization: `Bearer ${this.token}` },
    });
  }

  getUsers(): Observable<IProfile[]> {
    return this.http.get<IProfile[]>(this.url, {
      headers: { Authorization: `Bearer ${this.token}` },
    });
  }

  getProfile(): Observable<IProfile> {
    return this.http.get<IProfile>(`${this.url}/me`, {
      headers: { Authorization: `Bearer ${this.token}` },
    });
  }

  setUser(userUpdate: IUpdateProfile): Observable<IProfile> {
    return this.http.put<IProfile>(`${this.url}`, userUpdate, {
      headers: { Authorization: `Bearer ${this.token}` },
    });
  }
}
