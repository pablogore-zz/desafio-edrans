import { Resolver, Arg, Mutation, Query } from "type-graphql";
import * as CareerTypes from "../types/Career";
import CareerModel from "../models/CareerModel";

@Resolver()
export default class CareerResolver {

  @Query(() =>CareerTypes.Career)
  async getCareer(
    @Arg("name") name: string
  ) {
    return CareerModel.get(name);
  }


  @Mutation(() => CareerTypes.Career, { nullable: true })
  async createCareer(
    @Arg("input") input: CareerTypes.CreateCareerInput) {
   
    return CareerModel.create(input);
  }
  
  @Mutation(() => CareerTypes.Career, { nullable: true })
  async updateCareer(
    @Arg("name") name: string,
    @Arg("input") input: CareerTypes.UpdateCareerInput
  ) {
    return CareerModel.update(name, input);
  }

  @Mutation(() => CareerTypes.Career, { nullable: true })
  async deleteCareer(
    @Arg("name") name: string
  ) {
    return CareerModel.delete(name);
  }
}