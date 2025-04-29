import { Module } from '@nestjs/common';
import { WorkspaceMembersService } from './workspace_members.service';
import { WorkspaceMembersController } from './workspace_members.controller';
import { WorkspaceMember } from './models/workspace_member.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports:[SequelizeModule.forFeature([WorkspaceMember])],
  controllers: [WorkspaceMembersController],
  providers: [WorkspaceMembersService],
})
export class WorkspaceMembersModule {}
