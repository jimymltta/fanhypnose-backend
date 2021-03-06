/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateConsultantArgs } from "./CreateConsultantArgs";
import { UpdateConsultantArgs } from "./UpdateConsultantArgs";
import { DeleteConsultantArgs } from "./DeleteConsultantArgs";
import { ConsultantFindManyArgs } from "./ConsultantFindManyArgs";
import { ConsultantFindUniqueArgs } from "./ConsultantFindUniqueArgs";
import { Consultant } from "./Consultant";
import { AnamnesisFindManyArgs } from "../../anamnesis/base/AnamnesisFindManyArgs";
import { Anamnesis } from "../../anamnesis/base/Anamnesis";
import { FactureFindManyArgs } from "../../facture/base/FactureFindManyArgs";
import { Facture } from "../../facture/base/Facture";
import { ScriptFindManyArgs } from "../../script/base/ScriptFindManyArgs";
import { Script } from "../../script/base/Script";
import { ConsultantService } from "../consultant.service";

@graphql.Resolver(() => Consultant)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ConsultantResolverBase {
  constructor(
    protected readonly service: ConsultantService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Consultant",
    action: "read",
    possession: "any",
  })
  async _consultantsMeta(
    @graphql.Args() args: ConsultantFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Consultant])
  @nestAccessControl.UseRoles({
    resource: "Consultant",
    action: "read",
    possession: "any",
  })
  async consultants(
    @graphql.Args() args: ConsultantFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Consultant[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Consultant",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Consultant, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Consultant",
    action: "read",
    possession: "own",
  })
  async consultant(
    @graphql.Args() args: ConsultantFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Consultant | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Consultant",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Consultant)
  @nestAccessControl.UseRoles({
    resource: "Consultant",
    action: "create",
    possession: "any",
  })
  async createConsultant(
    @graphql.Args() args: CreateConsultantArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Consultant> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Consultant",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Consultant"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Consultant)
  @nestAccessControl.UseRoles({
    resource: "Consultant",
    action: "update",
    possession: "any",
  })
  async updateConsultant(
    @graphql.Args() args: UpdateConsultantArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Consultant | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Consultant",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Consultant"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Consultant)
  @nestAccessControl.UseRoles({
    resource: "Consultant",
    action: "delete",
    possession: "any",
  })
  async deleteConsultant(
    @graphql.Args() args: DeleteConsultantArgs
  ): Promise<Consultant | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Anamnesis])
  @nestAccessControl.UseRoles({
    resource: "Consultant",
    action: "read",
    possession: "any",
  })
  async anamneses(
    @graphql.Parent() parent: Consultant,
    @graphql.Args() args: AnamnesisFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Anamnesis[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Anamnesis",
    });
    const results = await this.service.findAnamneses(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => [Facture])
  @nestAccessControl.UseRoles({
    resource: "Consultant",
    action: "read",
    possession: "any",
  })
  async factures(
    @graphql.Parent() parent: Consultant,
    @graphql.Args() args: FactureFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Facture[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Facture",
    });
    const results = await this.service.findFactures(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => [Script])
  @nestAccessControl.UseRoles({
    resource: "Consultant",
    action: "read",
    possession: "any",
  })
  async scripts(
    @graphql.Parent() parent: Consultant,
    @graphql.Args() args: ScriptFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Script[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Script",
    });
    const results = await this.service.findScripts(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }
}
