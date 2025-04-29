import { Module } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { DevicesController } from './devices.controller';
import { Device } from './models/device.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports:[SequelizeModule.forFeature([Device])],
  controllers: [DevicesController],
  providers: [DevicesService],
})
export class DevicesModule {}
