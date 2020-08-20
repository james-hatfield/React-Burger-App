import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import { Customer } from './customer.entity';
import { Ingredients } from './ingredient.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => Ingredients)
  @JoinColumn()
  ingredients: Ingredients;

  @OneToOne(type => Customer)
  @JoinColumn()
  customer: Customer;

  @Column()
  price: number;
}
