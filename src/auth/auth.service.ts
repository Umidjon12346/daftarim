import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";

import * as bcrypt from "bcrypt";
import { UserService } from "../user/user.service";
import { JwtService } from "@nestjs/jwt";
import { User } from "../user/models/user.model";
import { CreateUserDto } from "../user/dto/create-user.dto";

import { AdminService } from "../admin/admin.service";
import { Admin } from "../admin/models/admin.model";
import { CreateAdminDto } from "../admin/dto/create-admin.dto";
import { SignInDto } from "./dto/sign-in.dto"; // Add this import

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly adminService: AdminService,
    private readonly jwtService: JwtService
  ) {}

  private async generateuserToken(user: User) {
    const payload = {
      id: user.id,
      email: user.email,
      is_active: user.is_active,
    };
    return { token: this.jwtService.sign(payload) };
  }
  private async generateadminToken(admin: Admin) {
    const payload = {
      id: admin.id,
      email: admin.email,
      isActive: admin.is_active,
    };
    return { token: this.jwtService.sign(payload) };
  }

  async singUpUser(createUserDto: CreateUserDto) {
    const condidate = await this.userService.findByEmail(createUserDto.email);
    if (condidate) {
      throw new BadRequestException("yo'qolll");
    }
    const hashedPassword = await bcrypt.hash(createUserDto.password, 7);
    createUserDto.password = hashedPassword;
    const newUser = await this.userService.create(createUserDto);
    return newUser;
  }

  async singInUser(singinDto: SignInDto) {
    const user = await this.userService.findByEmail(singinDto.email);
    console.log(user);

    if (!user) {
      throw new UnauthorizedException("tekshir nima haxto ");
    }
    const validPassword = await bcrypt.compare(
      singinDto.password,
      user.password
    );
    if (!validPassword) {
      throw new UnauthorizedException("tekshir nima haxto ");
    }
    return this.generateuserToken(user);
  }

  async singUpAdmin(createAdminDto: CreateAdminDto) {
    const condidate = await this.adminService.findByEmail(createAdminDto.email);
    if (condidate) {
      throw new BadRequestException("yo'qolll");
    }
    const hashedPassword = await bcrypt.hash(createAdminDto.password, 7);
    createAdminDto.password = hashedPassword;
    const newAdmin = await this.adminService.create(createAdminDto);
    return newAdmin;
  }

  async singInAdmin(singinDto: SignInDto) {
    const admin = await this.adminService.findByEmail(singinDto.email);
    if (!admin) {
      throw new UnauthorizedException("tekshir nima haxto ");
    }

    const validPassword = await bcrypt.compare(
      singinDto.password,
      admin.password
    );
    if (!validPassword) {
      throw new UnauthorizedException("tekshir nima haxto ");
    }
    return this.generateadminToken(admin);
  }
}
