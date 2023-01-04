import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class DbService {
  private tables: any;

  constructor(@Inject('SEQUELIZE') private readonly sequelize) { }

  getSequelize() {
    return this.sequelize;
  }

  transaction() {
    return this.sequelize.transaction();
  }

  async query<T = any>(sql, params = {}, transaction = null) {
    const query = await this.sequelize.query(sql, { replacements: params, type: this.sequelize.QueryTypes.SELECT, transaction });
    return query as T[];
  }

  async findAll(sql, params = {}, transaction = null) {
    return this.sequelize.query(sql, { replacements: params, type: this.sequelize.QueryTypes.SELECT, transaction });
  }

  async findOne<T = any>(sql, replacements = {}, transaction = null) {
    const rs = await this.sequelize.query(sql, { replacements: replacements, type: this.sequelize.QueryTypes.SELECT, transaction });
    return rs.length > 0 ? (rs[0] as T) : null;
  }

  update(sql, replacements = {}, transaction = null) {
    return this.sequelize.query(sql, { replacements: replacements, type: this.sequelize.QueryTypes.UPDATE, transaction });
  }

  delete(sql, replacements = {}, transaction = null) {
    return this.sequelize.query(sql, { replacements: replacements, type: this.sequelize.QueryTypes.DELETE, transaction });
  }

}
