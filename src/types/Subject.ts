import { ObjectType, InputType, Field, registerEnumType } from "type-graphql";
import { EmailAddress, DateTime } from "@okgrow/graphql-scalars";



@ObjectType()
export class Subject {

    @Field(type => String, { nullable: false })
    name?: String

    @Field(type => String, { nullable: false })
    title

    @Field(type => DateTime, { nullable: true })
    created?: DateTime

    @Field(type => DateTime, { nullable: true })
    modified?: DateTime
}

@InputType()
export class CreateSubjectInput {
  @Field(type => String, { nullable: false })
  name?: String
    
  @Field(type => String, { nullable: false })
  title_awarded

}

@InputType()
export class UpdateSubjectInput {
  @Field(type => String, { nullable: false })
  title_awarded
}