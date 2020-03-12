import Sequelize from 'sequelize';

import Client from '../app/models/Client';
import Product from '../app/models/Product';
import Favorite from '../app/models/Favorite';

import databaseConfig from '../config/database';

const models = [Client, Product, Favorite];

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
