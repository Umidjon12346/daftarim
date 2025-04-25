import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {
  @ApiProperty({
    example: "Ali",
    description: "Foydalanuvchining ismi",
  })
  @IsNotEmpty({ message: "Ism bosh bo‘lmasligi kerak" })
  @IsString({ message: "Ism matn bo‘lishi kerak" })
  first_name: string;

  @ApiProperty({
    example: "Valiyev",
    description: "Foydalanuvchining familiyasi",
  })
  @IsNotEmpty({ message: "Familiya bosh bo‘lmasligi kerak" })
  @IsString({ message: "Familiya matn bo‘lishi kerak" })
  last_name: string;

  @ApiProperty({
    example: "ali.valiyev@example.com",
    description: "Foydalanuvchining email manzili",
  })
  @IsNotEmpty({ message: "Email bosh bo‘lmasligi kerak" })
  @IsEmail({}, { message: "Email formati noto‘g‘ri" })
  email: string;

  @ApiProperty({
    example: "parol123",
    description: "Kamida 6 ta belgidan iborat parol",
  })
  @IsNotEmpty({ message: "Parol bosh bo‘lmasligi kerak" })
  @MinLength(6, { message: "Parol kamida 6 ta belgidan iborat bo‘lishi kerak" })
  password: string;

  @ApiProperty({
    example: "https://example.com/images/user.jpg",
    description: "Foydalanuvchi rasmi (URL formatida)",
  })
  @IsNotEmpty({ message: "Rasm yo‘q" })
  @IsString({ message: "Rasm URL matn bo‘lishi kerak" })
  photo: string;
}
