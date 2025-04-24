import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty({ message: "Ism bosh bolmasligi kerak" })
  @IsString({ message: "Ism matn bolishi kerak" })
  first_name: string;

  @IsNotEmpty({ message: "Familiya bosh bolmasligi kerak" })
  @IsString({ message: "Familiya matn bolishi kerak" })
  last_name: string;

  @IsNotEmpty({ message: "Email bosh bolmasligi kerak" })
  @IsEmail({}, { message: "Email formati notogri" })
  email: string;

  @IsNotEmpty({ message: "Parol bosh bolmasligi kerak" })
  @MinLength(6, { message: "Parol kamida 6 ta belgidan iborat bolishi kerak" })
  password: string;

  @IsNotEmpty({ message: "Rasm yoq" })
  @IsString({ message: "Rasm URL matn bolishi kerak" })
  photo: string;
}
