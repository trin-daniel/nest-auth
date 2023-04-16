import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

/**
 ** Senha: 123456
 **/

const USERS = [
  {
    id: 1,
    username: 'roberto_salvador@gmail.com',
    password: '$2b$10$cYZMBU0ZXqRJzIZLYvW8DuwKZ545y5wXb1XIzl9iUxJIRBbitFW1C',
    role: 'admin',
  },
  {
    id: 2,
    username: 'eduarda@outlook.com',
    password: '$2b$10$cYZMBU0ZXqRJzIZLYvW8DuwKZ545y5wXb1XIzl9iUxJIRBbitFW1C',
    role: 'user',
  },
];

@Injectable()
export class SignInService {
  constructor(private jwtService: JwtService) {}

  signIn(username: string, password: string) {
    const user = this.validateCredentials(username, password);
    const payload = {
      sub: user.id,
      username: user.username,
      role: user.role,
    };

    return this.jwtService.sign(payload);
  }

  validateCredentials(username: string, password: string) {
    const user = USERS.find(
      (USER) =>
        USER.username === username &&
        bcrypt.compareSync(password, USER.password),
    );
    if (user) {
      return user;
    } else {
      throw new Error('User not found');
    }
  }
}
