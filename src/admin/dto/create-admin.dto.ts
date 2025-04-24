import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  IsInt,
} from "class-validator";

export class CreateAdminDto {
  @IsNotEmpty({ message: "Ism sharif bosh bolmasligi kerak" })
  full_name: string;

  @IsEmail({}, { message: "Email formati notogri" })
  email: string;

  @IsNotEmpty({ message: "Parol bosh bolmasligi kerak" })
  @IsString({ message: "Parol matn bolishi kerak" })
  @MinLength(6, { message: "Parol kamida 6 ta belgidan iborat blishi kerak" })
  password: string;

  @IsNotEmpty({ message: "Role ID kerak" })
  @IsInt({ message: "Role ID butun son bolishi kerak" })
  roleId: number;
}
