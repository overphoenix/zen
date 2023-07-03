import * as http from 'http';

import { Room, Server } from '@colyseus/core';
import { WebSocketTransport } from '@colyseus/ws-transport';
import { Injectable, Logger, OnApplicationShutdown } from '@nestjs/common';

import { AuthService } from '../auth';

const logger = new Logger('GameService');

type Type<T> = new (...args: any[]) => T;

@Injectable()
export class GameService implements OnApplicationShutdown {
  constructor(private readonly auth: AuthService) {}

  server: Server = null as any;

  createServer(httpServer: http.Server) {
    if (this.server) return;

    this.server = new Server({
      transport: new WebSocketTransport({
        server: httpServer,
      }),
    });
  }

  defineRoom(name: string, room: Type<Room<any, any>>) {
    return this.server.define(name, room, { auth: this.auth });
  }

  onApplicationShutdown(sig: any) {
    if (!this.server) return;
    logger.log(`Caught signal ${sig}. Game service shutting down.`);
    this.server.gracefullyShutdown();
  }
}
