import { IsInt, IsNotEmpty } from "class-validator";

export class CreateBlockDto {
  @IsNotEmpty({ message: "typeId bosh bolmasligi kerak" })
  @IsInt({ message: "typeId butun son bolishi kerak" })
  typeId: number;

  @IsNotEmpty({ message: "created_by bosh bolmasligi kerak" })
  @IsInt({ message: "created_by butun son bolishi kerak" })
  created_by: number;

  @IsNotEmpty({ message: "parent bosh bolmasligi kerak" })
  @IsInt({ message: "parent butun son bolishi kerak" })
  parent: number;

  @IsNotEmpty({ message: "order_index bosh bolmasligi kerak" })
  @IsInt({ message: "order_index butun son bolishi kerak" })
  order_index: number;
}
