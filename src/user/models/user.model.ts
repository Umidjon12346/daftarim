import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IUserCreationAttr {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  // photo: string;
}

@Table({ tableName: "users", timestamps: true })
export class User extends Model<User, IUserCreationAttr> {
  @Column({ type: DataType.STRING, allowNull: false })
  first_name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  last_name: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  // @Column({ type: DataType.STRING, allowNull: true })
  // photo: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_active: boolean;
}
