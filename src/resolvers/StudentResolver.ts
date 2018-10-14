import { Resolver, Arg, Mutation, Query } from "type-graphql";
import * as StudentTypes from "../types/Student";
import StudentModel from "../models/StudentModel";

@Resolver()
export default class StudentResolver {

  @Query(() => StudentTypes.Student)
  async getStudent(
    @Arg("email") email: string
  ) {
    return StudentModel.get(email);
  }


  @Mutation(() => StudentTypes.Student, { nullable: true })
  async createStudent(
    @Arg("input") input: StudentTypes.CreateStudentInput) {
   
    return StudentModel.create(input);
  }
  
  @Mutation(() => StudentTypes.Student, { nullable: true })
  async updateStudent(
    @Arg("email") email: string,
    @Arg("input") input: StudentTypes.UpdateStudentInput
  ) {
    //return StudentModel.create(input);
    return StudentModel.update(email, input);
  }

  @Mutation(() => StudentTypes.Student, { nullable: true })
  async deleteStudent(
    @Arg("email") email: string
  ) {
    return StudentModel.delete(email);
  }
}