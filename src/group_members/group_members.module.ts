import { Module } from '@nestjs/common';
import { GroupMembersService } from './group_members.service';
import { GroupMembersController } from './group_members.controller';
import { GroupMember } from './models/group_member.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports:[SequelizeModule.forFeature([GroupMember])],
  controllers: [GroupMembersController],
  providers: [GroupMembersService],
})
export class GroupMembersModule {}
