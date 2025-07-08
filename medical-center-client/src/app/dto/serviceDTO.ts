import { Long } from "mongodb";

export class ServiceDTO {

    constructor(public id: Long, public name : string, public price: number, public clinicId: Long) {

    }
}