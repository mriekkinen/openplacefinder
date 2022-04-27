import { Table, Column, Model } from 'sequelize-typescript';

@Table({
  underscored: true,
  timestamps: false,
  tableName: 'wikipages',
  modelName: 'wikipage'
})
export class Wikipage extends Model {
  @Column
  key!: string;

  @Column
  value!: string;

  @Column
  description!: string;
}
