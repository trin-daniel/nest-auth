import { Module } from '@nestjs/common';
import { SignInService } from './sign-in/service/sign-in.service';
import { SignInController } from './sign-in/controller/sign-in.controller';
import { JwtStrategyService } from './services/jwt-strategy/jwt-strategy.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: '^kXa*9AHn60XS0ch',
      signOptions: {
        expiresIn: '60s',
      },
    }),
  ],
  controllers: [SignInController],
  providers: [SignInService, JwtStrategyService],
})
export class AuthModule {}
