/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { FactureWhereUniqueInput } from "../../facture/base/FactureWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class FactureUpdateManyWithoutConsultantsInput {
  @Field(() => [FactureWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FactureWhereUniqueInput],
  })
  connect?: Array<FactureWhereUniqueInput>;

  @Field(() => [FactureWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FactureWhereUniqueInput],
  })
  disconnect?: Array<FactureWhereUniqueInput>;

  @Field(() => [FactureWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FactureWhereUniqueInput],
  })
  set?: Array<FactureWhereUniqueInput>;
}
export { FactureUpdateManyWithoutConsultantsInput };
