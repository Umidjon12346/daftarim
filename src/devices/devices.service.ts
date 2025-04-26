import { Injectable } from "@nestjs/common";
import { CreateDeviceDto } from "./dto/create-device.dto";
import { UpdateDeviceDto } from "./dto/update-device.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Device } from "./models/device.model";

@Injectable()
export class DevicesService {
  constructor(@InjectModel(Device) private deviceModel: typeof Device) {}
  create(createDeviceDto: CreateDeviceDto): Promise<Device> {
    return this.deviceModel.create(createDeviceDto);
  }

  findAll() {
    return this.deviceModel.findAll();
  }

  findOne(id: number) {
    return this.deviceModel.findByPk(id);
  }

  async update(id: number, updatedeviceDto: UpdateDeviceDto) {
    const updatedevice = await this.deviceModel.update(updatedeviceDto, {
      where: { id },
      returning: true,
    });
    return updatedevice[1][0];
  }

  async remove(id: number) {
    const removedevice = await this.deviceModel.destroy({ where: { id } });
    if (removedevice > 0) {
      return `ochib olib kettii`;
    }
    return "ochirrmmaa";
  }
}
