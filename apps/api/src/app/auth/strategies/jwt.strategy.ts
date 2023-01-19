import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { JwtPayload, RequestUser } from '@zen/nest-auth';
import { Request } from 'express';
import { Strategy } from 'passport-jwt';

import { ConfigService } from '../../config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private readonly config: ConfigService) {
    super({
      secretOrKey: config.jwtOptions.publicKey
        ? config.jwtOptions.publicKey
        : config.jwtOptions.secret,

      jwtFromRequest: (req: Request & { token?: string }) => {
        // Websocket connection
        if (req.token) return req.token;
        // HTTP request
        let authHeader = req.header('Authorization');
        if (!authHeader) authHeader = req.header('authorization');
        if (!authHeader) throw new UnauthorizedException('No Authorization header found');

        // Strips `'Bearer '` and returns only the token
        return authHeader.substring(7);
      },
    });
  }

  async validate(payload: JwtPayload) {
    // Validate the audience
    if (payload.aud !== this.config.siteUrl) return null;

    const user: RequestUser = {
      id: payload.sub,
      roles: payload.roles,
    };
    return user;
  }
}
