import { IProfile } from "./iprofile"

export interface Icomments
{
    _id: string
    comment   : string,
    rate      : string,
    elementId : string,
    author    : string
}

export interface IupdateComment
{
  comment   : string,
  rate      : string,
  elementId : string,
  author    : string
}

export interface IAggiornaComment
{
  comment   : string,

}
