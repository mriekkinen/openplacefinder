import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  underscored: true,
  timestamps: false,
  modelName: 'description'
})
export class Description extends Model {
  @Column({
    type: DataType.TEXT,
    allowNull: false
  })
  key!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true
  })
  value!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false
  })
  description!: string;
}
