import { Long } from "mongodb";

export class UserDTO {

    constructor(public id: Long, public email : string, public username: string, public roles : [string]) {

    }
}