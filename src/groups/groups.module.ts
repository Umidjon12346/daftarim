import { Module } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GroupsController } from './groups.controller';
import { Group } from './models/group.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports:[SequelizeModule.forFeature([Group])],
  controllers: [GroupsController],
  providers: [GroupsService],
})
export class GroupsModule {}
