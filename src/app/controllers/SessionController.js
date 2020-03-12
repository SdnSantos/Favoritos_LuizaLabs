import jwt from 'jsonwebtoken';

import Client from '../models/Client';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const client = await Client.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!client) {
      return res.status(401).json({ error: 'Client not exists' });
    }

    const { id, name, email } = client;

    return res.json({
      client: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expireIn,
      }),
    });
  }
}

export default new SessionController();
