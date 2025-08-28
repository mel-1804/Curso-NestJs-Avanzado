import 'dotenv/config';
import * as joi from 'joi';

interface EnviromentVariables {
  PORT: number;
  NATS_SERVER: string;
}

const enviromentSchema = joi
  .object({
    PORT: joi.number().required(),
    NATS_SERVER: joi.string().required(),
  })
  .unknown();

const { error, value } = enviromentSchema.validate({
  ...process.env,
});

if (error) {
  throw new Error('Enviroments error ${error.message}');
}

const env: EnviromentVariables = value;
export const enviroments = {
  port: env.PORT,
  natServer: env.NATS_SERVER,
};
