import { Module } from '@nestjs/common';
import { ClientModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientModule.register([
      {
        name: NATS_SERVICE,
        transport: Transport.NATS,
        options: {
          servers: environmentsVariables.natsServer,
        },
      },
    ]),
  ],
  exports: [
    ClientModule.register([
      {
        name: NATS_SERVICE,
        transport: Transport.NATS,
        options: {
          servers: environmentsVariables.natsServer,
        },
      },
    ]),
  ],
})
export class NatsModule {}
