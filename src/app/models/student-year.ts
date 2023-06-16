import { Department } from "./department";
import { Student } from "./student";

export class StudentYear {
    id: number;
    fromYear: string;
    toYear: string;
    departments: Department[];
    // students: Student[];
}
