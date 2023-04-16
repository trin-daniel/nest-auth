import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { SignInService } from '../service/sign-in.service';
import { JWTGuard } from '../../guards/jwt-guard/jwt.guard';
import { Role } from '../../decorators/role.decorator';
import { RoleGuard } from '../../guards/role/role.guard';

interface IRequestBody {
  username: string;
  password: string;
}

@Controller()
export class SignInController {
  constructor(private signInService: SignInService) {}

  @Post('sign-in')
  signIn(@Body() body: IRequestBody) {
    const { username, password } = body;
    const token = this.signInService.signIn(username, password);
    return { token };
  }

  @Role('admin')
  @UseGuards(JWTGuard, RoleGuard)
  @Get('profile')
  profile() {
    return {
      name: 'Roberto',
      email: 'roberto@gmail.com',
      gender: 'male',
    };
  }
}
