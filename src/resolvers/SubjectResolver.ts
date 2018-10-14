import { Resolver, Arg, Mutation, Query } from "type-graphql";
import * as SubjectTypes from "../types/Subject";
import SubjectModel from "../models/SubjectModel";

@Resolver()
export default class SubjectResolver {

  @Query(() => SubjectTypes.Subject)
  async getSubject(
    @Arg("name") name: string
  ) {
    return SubjectModel.get(name);
  }


  @Mutation(() => SubjectTypes.Subject, { nullable: true })
  async createSubject(
    @Arg("input") input: SubjectTypes.CreateSubjectInput) {
   
    return SubjectModel.create(input);
  }
  
  @Mutation(() => SubjectTypes.Subject, { nullable: true })
  async updateSubject(
    @Arg("title") email: string,
    @Arg("input") input: SubjectTypes.UpdateSubjectInput
  ) {
    //return StudentModel.create(input);
    return SubjectModel.update(email, input);
  }

  @Mutation(() => SubjectTypes.Subject, { nullable: true })
  async deleteSubject(
    @Arg("email") name: string
  ) {
    return SubjectModel.delete(name);
  }
}