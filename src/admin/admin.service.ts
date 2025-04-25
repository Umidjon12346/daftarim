import { Injectable } from "@nestjs/common";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Admin } from "./models/admin.model";

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin) private adminModel: typeof Admin) {}

  
  create(createAdminDto: CreateAdminDto) {
    return this.adminModel.create(createAdminDto);
  }

  findAll() {
    return this.adminModel.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const admin = await this.adminModel.findByPk(id);
    return admin;
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    const updateAdmin = await this.adminModel.update(updateAdminDto, {
      where: { id },
      returning: true,
    });
    return updateAdmin[1][0];
  }

  async remove(id: number) {
    const removeAdmin = await this.adminModel.destroy({ where: { id } });
    if (removeAdmin > 0) {
      return "ochib olib kettii";
    }
    return "ochirmaaaa";
  }

  async findByEmail(email: string) {
    const admin = await this.adminModel.findOne({
      where: { email },
      include: { all: true },
    });
    return admin?.dataValues;
  }
}

