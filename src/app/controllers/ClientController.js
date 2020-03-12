import Client from '../models/Client';

class ClientController {
  async index(req, res) {
    const clients = await Client.findAll({
      attributes: ['id', 'name', 'email'],
    });

    return res.json(clients);
  }

  async show(req, res) {
    const { clientId } = req.params;

    const client = await Client.findByPk(clientId);

    if (!client) {
      return res.status(401).json({ error: 'Client not found' });
    }

    const { id, name, email } = client;

    return res.json({
      id,
      name,
      email,
    });
  }

  async store(req, res) {
    const clientExists = await Client.findOne({
      where: { email: req.body.email },
    });

    if (clientExists) {
      return res.status(400).json({ error: 'Client already exists' });
    }

    const { name, email } = await Client.create(req.body);

    return res.json({
      name,
      email,
    });
  }

  async update(req, res) {
    const { clientId } = req.params;
    const { name, email } = req.body;

    const client = await Client.findByPk(clientId);

    if (!client) {
      return res.status(401).json({ error: 'Client not found' });
    }

    if (email === client.email) {
      return res.status(401).json({ error: 'Email already registered' });
    }

    await client.update(req.body);

    return res.json({
      name,
      email,
    });
  }

  async delete(req, res) {
    const { clientId } = req.params;

    const client = await Client.findByPk(clientId);

    if (!client) {
      return res.status(401).json({ error: 'Client not found' });
    }

    client.destroy();

    return res.json({ Alert: 'Client deleted' });
  }
}

export default new ClientController();
