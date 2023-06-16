import { Subject } from "./subject";
import { Student } from "./student";

export class Duty {
    id: number;
    subject: Subject;
    // student: Student;
    preExamPoints: number;
    examPoints: number;
    mark: number;
    finished: boolean;
    listeningYearFrom: string;
    listeningYearTo:  string;
}
