import { Long } from "mongodb";

export class ClinicDTO {

    constructor(public id: Long, public name : string, public description: string) {

    }
}