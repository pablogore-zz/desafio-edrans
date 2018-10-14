import { ObjectType, InputType, Field, registerEnumType } from "type-graphql";
import { EmailAddress, DateTime } from "@okgrow/graphql-scalars";



@ObjectType()
export class Student {

    @Field(type => String, { nullable: false })
    fullName?: String

    @Field(type => EmailAddress, { nullable: false })
    email?: EmailAddress;
  
    @Field(type => DateTime, { nullable: true })
    birthday?: DateTime

    @Field(type => String, { nullable: true })
    address?: String

    @Field(type => DateTime, { nullable: true })
    created?: DateTime

    @Field(type => DateTime, { nullable: true })
    modified?: DateTime
}

@InputType()
export class CreateStudentInput {
  @Field(type => String, { nullable: false })
  fullName?: String

  @Field(type => EmailAddress, { nullable: false })
  email?: EmailAddress;

  @Field(type => DateTime, { nullable: true })
  birthday?: DateTime

  @Field(type => String, { nullable: true })
  address?: String
}

@InputType()
export class UpdateStudentInput {
  @Field(type => String, { nullable: true })
  fullName?: String

  @Field(type => DateTime, { nullable: true })
  birthday?: DateTime

  @Field(type => String, { nullable: true })
  address?: String
}