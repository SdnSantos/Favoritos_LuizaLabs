import api from '../../service/api';

import Favorite from '../models/Favorite';

class FavoriteController {
  async show(req, res) {
    const { productId } = req.params;

    const product = await api.get(`/${productId}`);

    if (!product) {
      return res.status(401).json('Product not exists');
    }

    const { brand, image, price } = product.data;

    return res.json({
      brand,
      image,
      price,
    });
  }
}

export default new FavoriteController();
