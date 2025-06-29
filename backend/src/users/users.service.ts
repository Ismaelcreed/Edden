// src/users/users.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: string) {
    return this.usersRepository.findOneBy({ id });
  }

 async create(userData: Partial<User>): Promise<User> {
  if (userData.password) {
    userData.password = await bcrypt.hash(userData.password, 10);
  }
  const user = this.usersRepository.create(userData);
  return this.usersRepository.save(user);
}

  remove(id: string) {
    return this.usersRepository.delete(id);
  }
}
