import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateTypeDto {
  @ApiProperty({
    example: "Matn",
    description: "Blok turi nomi (masalan: Matn, Rasm, Video)",
  })
  @IsNotEmpty({ message: "name bosh bo‘lmasligi kerak" })
  @IsString({ message: "name matn (string) bo‘lishi kerak" })
  name: string;

  @ApiProperty({
    example: "Bu tur faqat matndan iborat bloklar uchun",
    description: "Blok turi haqida qisqacha tavsif",
  })
  @IsNotEmpty({ message: "description bosh bo‘lmasligi kerak" })
  @IsString({ message: "description matn (string) bo‘lishi kerak" })
  description: string;
}
