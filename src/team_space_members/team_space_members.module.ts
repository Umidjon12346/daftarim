import { Module } from '@nestjs/common';
import { TeamSpaceMembersService } from './team_space_members.service';
import { TeamSpaceMembersController } from './team_space_members.controller';
import { TeamSpaceMember } from './models/team_space_member.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports:[SequelizeModule.forFeature([TeamSpaceMember])],
  controllers: [TeamSpaceMembersController],
  providers: [TeamSpaceMembersService],
})
export class TeamSpaceMembersModule {}
