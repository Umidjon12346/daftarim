import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateBlockPropertyDto {
  @IsNotEmpty({ message: "blockId bosh bolmasligi kerak" })
  @IsInt({ message: "blockId butun son bolishi kerak" })
  blockId: number;

  @IsNotEmpty({ message: "propertiesId bosh bolmasligi kerak" })
  @IsInt({ message: "propertiesId butun son bolishi kerak" })
  propertiesId: number;

  @IsNotEmpty({ message: "Qiymat (value) bosh bolmasligi kerak" })
  @IsString({ message: "Qiymat matn (string) bolishi kerak" })
  value: string;
}
