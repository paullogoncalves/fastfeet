import Sequelize from 'sequelize';

import Recipients from '../app/models/Recipients';
import User from '../app/models/User';
import DeliveryMan from '../app/models/DeliveryMan';
import Oder from '../app/models/Order';

import databaseConfig from '../config/database';

const models = [Recipients, User, DeliveryMan, Oder];

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
