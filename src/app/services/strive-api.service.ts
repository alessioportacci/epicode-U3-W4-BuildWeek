import { Injectable } from '@angular/core';
//Interfaccia
import { IProfile } from 'src/app/interfaces/iprofile';
//Token
import { Token } from 'src/app/environment/token';
//Http
import { HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class StriveApiService {

  readonly url:string = "https://striveschool-api.herokuapp.com/api/profile/"
  token:string = ""

  constructor
  (
    private Token: Token,
    private http: HttpClient
  )
  {
    this.token = Token.token
  }

  getUser(userId:string)
  {
    return this.http.get<IProfile>(this.url, {params:{userId: userId}})
  }

  getUsers()
  {
    return this.http.get<IProfile[]>(this.url)
  }

  getProfile()
  {
    return this.http.get<IProfile[]>(`${this.url}/me` )
  }

  setUser()
  {

  }
}
