import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "../common/guards/jwt-auth.guard";
import { JwtIsAdminGuard } from "../common/guards/is.admin.guard";
import { JwtSelfUserGuard } from "../common/guards/user-self.guard";


@ApiTags("User-Foydalanuchi")
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtIsAdminGuard)
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Foydalanuvchi qo'shish" })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @UseGuards(JwtIsAdminGuard)
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Barcha foydalanuvchilarni olish" })
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @UseGuards(JwtSelfUserGuard)
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Foydalanuvchini olish" })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.userService.findOne(+id);
  }

  @UseGuards(JwtSelfUserGuard)
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Foydalanuvchini taxrirlash" })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @UseGuards(JwtIsAdminGuard)
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Foydalanuvchini o'chrish " })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.userService.remove(+id);
  }
}
