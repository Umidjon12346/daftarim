import { Injectable } from "@nestjs/common";
import { CreateRoleDto } from "./dto/create-role.dto";
import { UpdateRoleDto } from "./dto/update-role.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Role } from "./models/role.model";

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private roleModel: typeof Role) {}
  
  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    return this.roleModel.create(createRoleDto);
  }

  findAll() {
    return this.roleModel.findAll();
  }

  findOne(id: number) {
    return this.roleModel.findByPk(id);
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    const updateRole = await this.roleModel.update(UpdateRoleDto, {
      where: { id },
      returning: true,
    });

    return updateRole[1][0];
  }

  async remove(id: number) {
    const removerole = await this.roleModel.destroy({ where: { id } });
    if (removerole > 0) {
      return `ochib olib kettii`;
    }
    return "ochirmaaa";
  }
}
