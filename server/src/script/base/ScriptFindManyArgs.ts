/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ScriptWhereInput } from "./ScriptWhereInput";
import { Type } from "class-transformer";
import { ScriptOrderByInput } from "./ScriptOrderByInput";

@ArgsType()
class ScriptFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ScriptWhereInput,
  })
  @Field(() => ScriptWhereInput, { nullable: true })
  @Type(() => ScriptWhereInput)
  where?: ScriptWhereInput;

  @ApiProperty({
    required: false,
    type: [ScriptOrderByInput],
  })
  @Field(() => [ScriptOrderByInput], { nullable: true })
  @Type(() => ScriptOrderByInput)
  orderBy?: Array<ScriptOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ScriptFindManyArgs };