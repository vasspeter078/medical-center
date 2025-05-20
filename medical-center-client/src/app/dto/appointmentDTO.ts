import { Long } from "mongodb";

export class AppointmentDTO {

    constructor(public id: Long, public time : Date, public status : string, public doctorId: Long, public patientId: Long) {

    }
}