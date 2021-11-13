import { Exercises } from "./Exercises";

export class Courses{
    CourseId!: number;
    Name!: string;
    Description!: string;
    Exercises!: Exercises[];
}