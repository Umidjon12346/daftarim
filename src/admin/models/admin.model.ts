import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IAdminCreationAttr {
  full_name: string;
  email: string;
  password: string;
  roleId: number;
}

@Table({ tableName: "admins", timestamps: true })
export class Admin extends Model<Admin, IAdminCreationAttr> {
  @Column({ type: DataType.STRING, allowNull: false })
  full_name: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @Column({ type: DataType.STRING, defaultValue: " " })
  refresh_token: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  roleId: number;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_active: boolean;
}
