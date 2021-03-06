import Sequelize from 'sequelize';
import User from '../app/model/User';
import databaseConfig from '../config/database';

const models = [
  User,    
];

class Database {
  constructor() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();

