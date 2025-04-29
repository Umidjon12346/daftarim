import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { BlocksModule } from "./blocks/blocks.module";
import { BlockPropertiesModule } from "./block_properties/block_properties.module";
import { TypesModule } from "./types/types.module";
import { Block } from "./blocks/models/block.model";
import { BlockProperty } from "./block_properties/models/block_property.model";
import { Type } from "./types/models/type.model";
import { PropertiesModule } from "./properties/properties.module";
import { Property } from "./properties/models/property.model";
import { AdminModule } from "./admin/admin.module";
import { Admin } from "./admin/models/admin.model";
import { UserModule } from "./user/user.module";
import { User } from "./user/models/user.model";
import { AuthModule } from "./auth/auth.module";
import { RolesModule } from "./roles/roles.module";
import { CommentsModule } from "./comments/comments.module";
import { DevicesModule } from "./devices/devices.module";
import { GroupsModule } from "./groups/groups.module";
import { GroupMembersModule } from "./group_members/group_members.module";
import { PermissionsModule } from "./permissions/permissions.module";
import { TeamSpaceModule } from "./team_space/team_space.module";
import { TeamSpaceMembersModule } from "./team_space_members/team_space_members.module";
import { WorkspaceModule } from "./workspace/workspace.module";
import { WorkspaceMembersModule } from "./workspace_members/workspace_members.module";
import { TeamSpace } from "./team_space/models/team_space.model";
import { Role } from "./roles/models/role.model";
import { TeamSpaceMember } from "./team_space_members/models/team_space_member.model";
import { Workspace } from "./workspace/models/workspace.model";
import { WorkspaceMember } from "./workspace_members/models/workspace_member.model";
import { Device } from "./devices/models/device.model";
import { Comment } from "./comments/models/comment.model";
import { GroupMember } from "./group_members/models/group_member.model";
import { Group } from "./groups/models/group.model";
import { Permission } from "./permissions/models/permission.model";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      models: [
        Block,
        BlockProperty,
        Type,
        Property,
        Admin,
        User,
        TeamSpace,
        TeamSpaceMember,
        Role,
        Workspace,
        WorkspaceMember,
        Device,
        Comment,
        GroupMember,
        Group,
        Permission
      ],
      autoLoadModels: true,
      sync: { alter: true },
      logging: true,
    }),
    BlocksModule,
    BlockPropertiesModule,
    TypesModule,
    PropertiesModule,
    AdminModule,
    UserModule,
    AuthModule,
    RolesModule,
    CommentsModule,
    DevicesModule,
    GroupsModule,
    GroupMembersModule,
    PermissionsModule,
    TeamSpaceModule,
    TeamSpaceMembersModule,
    WorkspaceModule,
    WorkspaceMembersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
