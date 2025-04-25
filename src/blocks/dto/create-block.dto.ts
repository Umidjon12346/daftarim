import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty } from "class-validator";

export class CreateBlockDto {
  @ApiProperty({
    example: 2,
    description: "Block tipi IDsi (masalan: 2 - matn, 3 - rasm va h.k.)",
  })
  @IsNotEmpty({ message: "typeId bosh bo‘lmasligi kerak" })
  @IsInt({ message: "typeId butun son bo‘lishi kerak" })
  typeId: number;

  @ApiProperty({
    example: 1,
    description: "Blockni yaratgan foydalanuvchi IDsi",
  })
  @IsNotEmpty({ message: "created_by bosh bo‘lmasligi kerak" })
  @IsInt({ message: "created_by butun son bo‘lishi kerak" })
  created_by: number;

  @ApiProperty({
    example: 0,
    description: "Parent block ID (asosiy bo‘lsa 0 yoki null)",
  })
  @IsNotEmpty({ message: "parent bosh bo‘lmasligi kerak" })
  @IsInt({ message: "parent butun son bo‘lishi kerak" })
  parent: number;

  @ApiProperty({
    example: 3,
    description: "Blockning sahifadagi tartib raqami (order)",
  })
  @IsNotEmpty({ message: "order_index bosh bo‘lmasligi kerak" })
  @IsInt({ message: "order_index butun son bo‘lishi kerak" })
  order_index: number;
}
