import Sequelize, { Model } from 'sequelize';

class Favorite extends Model {
  static init(sequelize) {
    super.init(
      {
        idClient: Sequelize.NUMBER,
        idProducts: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default Favorite;
