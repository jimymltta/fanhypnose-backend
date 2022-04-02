/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ConsultantService } from "../consultant.service";
import { ConsultantCreateInput } from "./ConsultantCreateInput";
import { ConsultantWhereInput } from "./ConsultantWhereInput";
import { ConsultantWhereUniqueInput } from "./ConsultantWhereUniqueInput";
import { ConsultantFindManyArgs } from "./ConsultantFindManyArgs";
import { ConsultantUpdateInput } from "./ConsultantUpdateInput";
import { Consultant } from "./Consultant";
import { FactureFindManyArgs } from "../../facture/base/FactureFindManyArgs";
import { Facture } from "../../facture/base/Facture";
import { FactureWhereUniqueInput } from "../../facture/base/FactureWhereUniqueInput";
import { ScriptFindManyArgs } from "../../script/base/ScriptFindManyArgs";
import { Script } from "../../script/base/Script";
import { ScriptWhereUniqueInput } from "../../script/base/ScriptWhereUniqueInput";
@swagger.ApiBearerAuth()
export class ConsultantControllerBase {
  constructor(
    protected readonly service: ConsultantService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "Consultant",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: Consultant })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: ConsultantCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Consultant> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Consultant",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"Consultant"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: data,
      select: {
        address: true,
        birthDate: true,
        channel: true,
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        job: true,
        kids: true,
        lastName: true,
        married: true,
        phone: true,
        updatedAt: true,
        whyTheyCome: true,
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "Consultant",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [Consultant] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(ConsultantFindManyArgs)
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Consultant[]> {
    const args = plainToClass(ConsultantFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Consultant",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        address: true,
        birthDate: true,
        channel: true,
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        job: true,
        kids: true,
        lastName: true,
        married: true,
        phone: true,
        updatedAt: true,
        whyTheyCome: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "Consultant",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Consultant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: ConsultantWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Consultant | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Consultant",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        address: true,
        birthDate: true,
        channel: true,
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        job: true,
        kids: true,
        lastName: true,
        married: true,
        phone: true,
        updatedAt: true,
        whyTheyCome: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return permission.filter(result);
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id")
  @nestAccessControl.UseRoles({
    resource: "Consultant",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Consultant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: ConsultantWhereUniqueInput,
    @common.Body()
    data: ConsultantUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Consultant | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Consultant",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"Consultant"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          address: true,
          birthDate: true,
          channel: true,
          createdAt: true,
          email: true,
          firstName: true,
          id: true,
          job: true,
          kids: true,
          lastName: true,
          married: true,
          phone: true,
          updatedAt: true,
          whyTheyCome: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id")
  @nestAccessControl.UseRoles({
    resource: "Consultant",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Consultant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: ConsultantWhereUniqueInput
  ): Promise<Consultant | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          address: true,
          birthDate: true,
          channel: true,
          createdAt: true,
          email: true,
          firstName: true,
          id: true,
          job: true,
          kids: true,
          lastName: true,
          married: true,
          phone: true,
          updatedAt: true,
          whyTheyCome: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id/factures")
  @nestAccessControl.UseRoles({
    resource: "Consultant",
    action: "read",
    possession: "any",
  })
  @ApiNestedQuery(FactureFindManyArgs)
  async findManyFactures(
    @common.Req() request: Request,
    @common.Param() params: ConsultantWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Facture[]> {
    const query = plainToClass(FactureFindManyArgs, request.query);
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Facture",
    });
    const results = await this.service.findFactures(params.id, {
      ...query,
      select: {
        consultant: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        fichier: true,
        id: true,
        titre: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post("/:id/factures")
  @nestAccessControl.UseRoles({
    resource: "Consultant",
    action: "update",
    possession: "any",
  })
  async createFactures(
    @common.Param() params: ConsultantWhereUniqueInput,
    @common.Body() body: ConsultantWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      factures: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Consultant",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Consultant"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id/factures")
  @nestAccessControl.UseRoles({
    resource: "Consultant",
    action: "update",
    possession: "any",
  })
  async updateFactures(
    @common.Param() params: ConsultantWhereUniqueInput,
    @common.Body() body: FactureWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      factures: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Consultant",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Consultant"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id/factures")
  @nestAccessControl.UseRoles({
    resource: "Consultant",
    action: "update",
    possession: "any",
  })
  async deleteFactures(
    @common.Param() params: ConsultantWhereUniqueInput,
    @common.Body() body: ConsultantWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      factures: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Consultant",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Consultant"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id/scripts")
  @nestAccessControl.UseRoles({
    resource: "Consultant",
    action: "read",
    possession: "any",
  })
  @ApiNestedQuery(ScriptFindManyArgs)
  async findManyScripts(
    @common.Req() request: Request,
    @common.Param() params: ConsultantWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Script[]> {
    const query = plainToClass(ScriptFindManyArgs, request.query);
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Script",
    });
    const results = await this.service.findScripts(params.id, {
      ...query,
      select: {
        consultant: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        text: true,
        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post("/:id/scripts")
  @nestAccessControl.UseRoles({
    resource: "Consultant",
    action: "update",
    possession: "any",
  })
  async createScripts(
    @common.Param() params: ConsultantWhereUniqueInput,
    @common.Body() body: ConsultantWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      scripts: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Consultant",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Consultant"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id/scripts")
  @nestAccessControl.UseRoles({
    resource: "Consultant",
    action: "update",
    possession: "any",
  })
  async updateScripts(
    @common.Param() params: ConsultantWhereUniqueInput,
    @common.Body() body: ScriptWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      scripts: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Consultant",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Consultant"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id/scripts")
  @nestAccessControl.UseRoles({
    resource: "Consultant",
    action: "update",
    possession: "any",
  })
  async deleteScripts(
    @common.Param() params: ConsultantWhereUniqueInput,
    @common.Body() body: ConsultantWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      scripts: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Consultant",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Consultant"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}