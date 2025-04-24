import { IsNotEmpty, IsString } from "class-validator";

export class CreatePropertyDto {
  @IsNotEmpty({ message: "name bosh bolmasligi kerak" })
  @IsString({ message: "name matn (string) bolishi kerak" })
  name: string;

  @IsNotEmpty({ message: "description bosh bolmasligi kerak" })
  @IsString({ message: "description matn (string) bolishi kerak" })
  description: string;
}
