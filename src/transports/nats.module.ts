import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { environmentsVariables } from '../config/environments';
import { NATS_SERVICE } from '../config/services';
import {} from 'dotenv/config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: NATS_SERVICE,
        transport: Transport.NATS,
        options: {
          servers: environmentsVariables.natServer,
        },
      },
    ]),
  ],
  exports: [
    ClientsModule.register([
      {
        name: NATS_SERVICE,
        transport: Transport.NATS,
        options: {
          servers: environmentsVariables.natServer,
        },
      },
    ]),
  ],
})
export class NatsModule {}
