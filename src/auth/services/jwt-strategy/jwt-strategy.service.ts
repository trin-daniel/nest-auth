import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy, 'JWT') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: '^kXa*9AHn60XS0ch',
    });
  }

  async validate(payload: string): Promise<string> {
    return payload;
  }
}
