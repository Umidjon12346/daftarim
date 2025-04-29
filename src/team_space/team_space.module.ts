import { Module } from '@nestjs/common';
import { TeamSpaceService } from './team_space.service';
import { TeamSpaceController } from './team_space.controller';
import { TeamSpace } from './models/team_space.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports:[SequelizeModule.forFeature([TeamSpace])],
  controllers: [TeamSpaceController],
  providers: [TeamSpaceService],
})
export class TeamSpaceModule {}
