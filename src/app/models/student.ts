import { Department } from "./department";
import { Duty } from "./duty";

export class Student {
    id: number;
    name: string;
    surname: string;
    index: string;
    department: Department;
    duties: Duty[];

}
