import DeliveryMan from '../models/DeliveryMan';
import User from '../models/User';

class DeliveryManController {
  async store(req, res) {
    const checkUserAdministrator = await User.findOne({
      where: { id: req.userId, email: 'admin@fastfeet.com' },
    });

    if (!checkUserAdministrator) {
      return res.status(401).json({ error: 'User is not a administrator' });
    }

    const deliveryMan = await DeliveryMan.create(req.body);

    return res.json(deliveryMan);
  }

  async index(req, res) {
    const checkUserAdministrator = await User.findOne({
      where: { id: req.userId, email: 'admin@fastfeet.com' },
    });

    if (!checkUserAdministrator) {
      return res.status(401).json({ error: 'User is not a administrator' });
    }

    const deliveryManList = await DeliveryMan.findAll({
      attributes: ['id', 'name', 'avatar_id', 'email'],
    });

    return res.json(deliveryManList);
  }

  async update(req, res) {
    const checkUserAdministrator = await User.findOne({
      where: { id: req.userId, email: 'admin@fastfeet.com' },
    });

    if (!checkUserAdministrator) {
      return res.status(401).json({ error: 'User is not a administrator' });
    }

    const deliveryMan = await DeliveryMan.findOne({
      where: { id: req.params.id },
    });

    if (!deliveryMan) {
      return res.status(400).json({ error: 'User not exists.' });
    }

    const { name, email, avatar_id } = req.body;
    const deliveryManReturn = await deliveryMan.update({
      name,
      email,
      avatar_id,
    });

    return res.json(deliveryManReturn);
  }

  async delete(req, res) {
    const checkUserAdministrator = await User.findOne({
      where: { id: req.userId, email: 'admin@fastfeet.com' },
    });

    if (!checkUserAdministrator) {
      return res.status(401).json({ error: 'User is not a administrator' });
    }

    const deliveryMan = await DeliveryMan.findOne({
      where: { id: req.params.id },
    });

    if (!deliveryMan) {
      return res.status(400).json({ error: 'User not exists.' });
    }

    await deliveryMan.destroy();

    return res.json();
  }
}
export default new DeliveryManController();
