export interface IAppointment{
    _id: string;
    patientName: string;
    doctorName: string;
    phone: string;
    paid: boolean;
    procedure: string;
    createdAt: string;
    referredBy: string;
}