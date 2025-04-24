import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "../user/dto/create-user.dto";

import { CreateAdminDto } from "../admin/dto/create-admin.dto";
import { SignInDto } from "./dto/sign-in.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup_user")
  signUp(@Body() createUserDto: CreateUserDto) {
    return this.authService.singUpUser(createUserDto);
  }

  @Post("signin_user")
  singInuser(@Body() singinDto: SignInDto) {
    return this.authService.singInUser(singinDto);
  }

  @Post("signup_admin")
  singUpadmin(@Body() createAdminDto: CreateAdminDto) {
    return this.authService.singUpAdmin(createAdminDto);
  }

  @Post("signin_admin")
  singInadmin(@Body() singinDto: SignInDto) {
    return this.authService.singInAdmin(singinDto);
  }
}
