import { ApiProperty } from "@nestjs/swagger";
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  IsInt,
} from "class-validator";

export class CreateAdminDto {
  @ApiProperty({
    example: "Kimdur Palonchiyev",
    description: "To‘liq ism sharif",
  })
  @IsNotEmpty({ message: "Ism sharif bosh bo‘lmasligi kerak" })
  full_name: string;

  @ApiProperty({
    example: "palonchiyev@example.com",
    description: "Adminning email manzili",
  })
  @IsEmail({}, { message: "Email formati noto‘g‘ri" })
  email: string;

  @ApiProperty({
    example: "parol123",
    description: "Kamida 6 ta belgidan iborat parol",
  })
  @IsNotEmpty({ message: "Parol bosh bo‘lmasligi kerak" })
  @IsString({ message: "Parol matn bo‘lishi kerak" })
  @MinLength(6, { message: "Parol kamida 6 ta belgidan iborat bo‘lishi kerak" })
  password: string;

  @ApiProperty({
    example: 2,
    description: "Role ID (masalan: 1 - superadmin, 2 - admin)",
  })
  @IsNotEmpty({ message: "Role ID kerak" })
  @IsInt({ message: "Role ID butun son bo‘lishi kerak" })
  roleId: number;
}
