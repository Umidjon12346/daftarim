import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateBlockPropertyDto {
  @ApiProperty({
    example: 1,
    description: "Blok IDsi (masalan: 1)",
  })
  @IsNotEmpty({ message: "blockId bosh bo‘lmasligi kerak" })
  @IsInt({ message: "blockId butun son bo‘lishi kerak" })
  blockId: number;

  @ApiProperty({
    example: 5,
    description: "Property ID (masalan: 5)",
  })
  @IsNotEmpty({ message: "propertiesId bosh bo‘lmasligi kerak" })
  @IsInt({ message: "propertiesId butun son bo‘lishi kerak" })
  propertiesId: number;

  @ApiProperty({
    example: "Qizil",
    description: "Propertyga tegishli qiymat (value)",
  })
  @IsNotEmpty({ message: "Qiymat (value) bosh bo‘lmasligi kerak" })
  @IsString({ message: "Qiymat matn (string) bo‘lishi kerak" })
  value: string;
}
