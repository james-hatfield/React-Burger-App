import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ingredients {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  meat: number;

  @Column()
  cheese: number;

  @Column()
  salad: number;

  @Column()
  bacon: number;

  @Column()
  breadTop: number;

  @Column()
  breadBottom: number;
}
