import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreatePropertyDto {
  @ApiProperty({
    example: "Rang",
    description: "Property nomi (masalan: Rang, Hajm, Material)",
  })
  @IsNotEmpty({ message: "name bosh bo‘lmasligi kerak" })
  @IsString({ message: "name matn (string) bo‘lishi kerak" })
  name: string;

  @ApiProperty({
    example: "Mahsulotning tashqi ko‘rinishini ifodalaydi",
    description: "Property haqida tavsif (description)",
  })
  @IsNotEmpty({ message: "description bosh bo‘lmasligi kerak" })
  @IsString({ message: "description matn (string) bo‘lishi kerak" })
  description: string;
}
