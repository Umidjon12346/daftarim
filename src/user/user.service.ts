import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./models/user.model";
import { FileService } from "../../file/file.service";

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private readonly userModel: typeof User,
    private readonly fileService: FileService
  ) {}
  async create(createUserDto: CreateUserDto, photo?: any): Promise<User> {
    // const fileName = await this.fileService.saveFile(photo);
    return this.userModel.create( createUserDto );
  }

  findAll() {
    return this.userModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.userModel.findByPk(id);
  }
  async findByEmail(email: string) {
    const user = await this.userModel.findOne({
      where: { email },
      include: { all: true },
    });
    return user?.dataValues;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const updateUser = await this.userModel.update(updateUserDto, {
      where: { id },
      returning: true,
    });
    return updateUser[1][0];
  }

  async remove(id: number) {
    const removeUser = await this.userModel.destroy({ where: { id } });
    if (removeUser > 0) {
      return "ochib olib kettii";
    }
    return "ochirmaaaa";
  }
}
