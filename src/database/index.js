import Sequelize from 'sequelize';

import User from '../app/models/User';
import DeliveryMan from '../app/models/DeliveryMan';

import databaseConfig from '../config/database';

const models = [User, DeliveryMan];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
