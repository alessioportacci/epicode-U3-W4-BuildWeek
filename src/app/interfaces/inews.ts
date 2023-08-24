import { IProfile } from "./iprofile"

export interface Inews
{
  _id: string, 				// server generated
  text: string,  		  // the only property you need to send
  username: string, 	// server generated
  createdAt: string, 	// server generated
  updatedAt: string, 	// server generated
  user: IProfile
  __v: number 				// server generated
}

export interface IupdateNews
{
  text: string,
}
