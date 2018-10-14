import { ObjectType, InputType, Field, registerEnumType } from "type-graphql";
import { EmailAddress, DateTime } from "@okgrow/graphql-scalars";



@ObjectType()
export class Career {

    @Field(type => String, { nullable: false })
    name?: String

    @Field(type => String, { nullable: true })
    degree?: String

    @Field(type => DateTime, { nullable: true })
    created?: DateTime

    @Field(type => DateTime, { nullable: true })
    modified?: DateTime
}

@InputType()
export class CreateCareerInput {
    @Field(type => String, { nullable: false })
    name?: String

    @Field(type => String, { nullable: true })
    degree?: String
}

@InputType()
export class UpdateCareerInput {
    @Field(type => String, { nullable: false })
    degree?: String
}