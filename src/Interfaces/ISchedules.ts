export interface Schedules {
  id: string;
  idSchedule: string;
  idSchedulePatient: string;
  dateSchedule: string;
  status: string;
  statusTerms: string;
  anesthetistType: string;
  procedure: {
    id: string;
    idErp: number;
    name: string;
    side: string;
    createdAt: string;
    updatedAt: string;
  };
  patient: {
    id: string;
    idErp: number;
    name: string;
    age: string;
    gender: "MALE" | "FEMALE";
  };
  hospital: {
    id: string;
    idErp: number;
    name: string;
    codeAbbreviation: string;
  };
  estimatedTime: number;
  healthProfessionals: {
    id: string;
    idErp: number;
    name: string;
    cellphone: string;
    speciality: string;
  };
  createdAt: string;
  updatedAt: string;
}
