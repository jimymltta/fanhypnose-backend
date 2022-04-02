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
import { ConsultantWhereUniqueInput } from "../../consultant/base/ConsultantWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
@InputType()
class AnamnesisCreateInput {
  @ApiProperty({
    required: false,
    type: () => ConsultantWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ConsultantWhereUniqueInput)
  @IsOptional()
  @Field(() => ConsultantWhereUniqueInput, {
    nullable: true,
  })
  consultant?: ConsultantWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  text?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  titre?: string | null;
}
export { AnamnesisCreateInput };
