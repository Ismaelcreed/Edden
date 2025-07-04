// src/users/user.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: 'user' })
  role: string;

  @Column({ nullable: true })
  profileUrl: string;

  @Column({ type: 'enum', enum: ['Homme', 'Femme', 'Autre'], default: 'Autre' })
  sex: 'Homme' | 'Femme' | 'Autre';

  @CreateDateColumn()
  createdAt: Date;
}
