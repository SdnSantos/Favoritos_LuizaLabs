import Sequelize, { Model } from 'sequelize';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        brand: Sequelize.STRING,
        image: Sequelize.STRING,
        price: Sequelize.NUMBER,
      },
      {
        sequelize,
      }
    );
  }
}

export default Product;
