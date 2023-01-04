import * as dotenv from 'dotenv';
import { IDatabaseConfig } from './interfaces/dbConfig.interface';

dotenv.config();

export const databaseConfig: IDatabaseConfig = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    config: {
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      dialect: process.env.DB_DIALECT,
      timezone: process.env.DB_TIMEZONE,
      logging: process.env.DB_LOGGING == 'true' ? true : false,
      dialectOptions: {
        useUTC: false,
        dateStrings: true,
        typeCast: true,
      },
      pool: {
        max: 1,
        min: 1,
        idle: 1000,
        acquire: 1000,
        evict: 1000,
      }
    }
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    config: {
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      dialect: process.env.DB_DIALECT,
      timezone: process.env.DB_TIMEZONE,
      logging: process.env.DB_LOGGING == 'true' ? true : false,
      dialectOptions: {
        useUTC: false,
        dateStrings: true,
        typeCast: true,
      },
      pool: {
        max: 1,
        min: 1,
        idle: 10000,
        acquire: 60000,
        evict: 1000,
      }
    }
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    config: {
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      dialect: process.env.DB_DIALECT,
      timezone: process.env.DB_TIMEZONE,
      logging: process.env.DB_LOGGING == 'true' ? true : false,
      dialectOptions: {
        useUTC: false,
        dateStrings: true,
        typeCast: true,
      },
      pool: {
        max: 250,
        min: 3,
        idle: 10000,
        acquire: 60000,
        evict: 1000,
      }
    }
  },
};
