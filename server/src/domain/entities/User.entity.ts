import { IUser } from '../interfaces/IUser';
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export class User implements IUser {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column('varchar', { nullable: false, length: 200 })
  name: string;

  @Column('varchar', { nullable: false, length: 150 })
  username: string;

  @Column('varchar', { nullable: false, length: 100 })
  password: string;

  @Column('varchar', { nullable: false, length: 200 })
  email: string;

  @Column('varchar', { nullable: true, length: 200 })
  whatsapp: string;

  @Column('boolean', { nullable: false })
  isAdmin: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column('varchar', { nullable: true, default: null })
  refreshToken: string;
}
