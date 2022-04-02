/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ScriptWhereInput } from "./ScriptWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ScriptListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ScriptWhereInput,
  })
  @ValidateNested()
  @Type(() => ScriptWhereInput)
  @IsOptional()
  @Field(() => ScriptWhereInput, {
    nullable: true,
  })
  every?: ScriptWhereInput;

  @ApiProperty({
    required: false,
    type: () => ScriptWhereInput,
  })
  @ValidateNested()
  @Type(() => ScriptWhereInput)
  @IsOptional()
  @Field(() => ScriptWhereInput, {
    nullable: true,
  })
  some?: ScriptWhereInput;

  @ApiProperty({
    required: false,
    type: () => ScriptWhereInput,
  })
  @ValidateNested()
  @Type(() => ScriptWhereInput)
  @IsOptional()
  @Field(() => ScriptWhereInput, {
    nullable: true,
  })
  none?: ScriptWhereInput;
}
export { ScriptListRelationFilter };
