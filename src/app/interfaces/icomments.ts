import { IProfile } from "./iprofile"

export interface Icomments
{
    comment   : string,
    rate      : string,
    elementId : string,
    author    : string
}

export interface IupdateComment
{
  comment : string
}
