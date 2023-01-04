export interface IDatabaseConfigAttributes {
  username?: string;
  password?: string;
  database?: string;
  config: {
    host?: string;
    port?: number | string;  
    dialect?: string;
    logging?: boolean,
    dialectOptions?: {
      useUTC?: boolean,
      dateStrings?: boolean,
      typeCast?: boolean,
    },
    timezone?: string,
    pool?: {
      max: number,
      min: number,
      idle: number,
      acquire: number,
      evict: number,
    },
  }
}

export interface IDatabaseConfig {
  development: IDatabaseConfigAttributes;
  test: IDatabaseConfigAttributes;
  production: IDatabaseConfigAttributes;
}
