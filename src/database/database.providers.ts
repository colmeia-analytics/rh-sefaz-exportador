const Sequelize = require('sequelize');
const pg = require('pg');
//---------------------------------------------------------------------
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';
import 'dotenv/config';
import { IDatabaseConfigAttributes } from './interfaces/dbConfig.interface';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config: IDatabaseConfigAttributes;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }

      pg.types.setTypeParser(1082, 'text', function(text) {return text;});
      pg.types.setTypeParser(1184, 'text', function(text) {return text;});
      pg.types.setTypeParser(1114, 'text', function(text) {return text;});
      
      console.log("moau")

      const sequelize = new Sequelize(
        config.database,
        config.username,
        config.password,
        config.config
      );

      sequelize
        .authenticate()
        .then(() => {
          console.log('Connection has been established successfully.');
        })
        .catch(err => {
          console.error('Unable to connect to the database:', err);
        });
       
        return sequelize;
    },
  },
];
