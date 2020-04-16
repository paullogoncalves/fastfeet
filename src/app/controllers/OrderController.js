import User from '../models/User';
import Order from '../models/Order';

class OrderController {
  async store(req, res) {
    const checkUserAdministrator = await User.findOne({
      where: { id: req.userId, email: 'admin@fastfeet.com' },
    });

    if (!checkUserAdministrator) {
      return res.status(401).json({ error: 'User is not administrator' });
    }

    const order = await Order.create(req.body);

    return res.json(order);
  }

  async index(req, res) {
    const checkUserAdministrator = await User.findOne({
      where: { id: req.userId, email: 'admin@fastfeet.com' },
    });

    if (!checkUserAdministrator) {
      return res.status(401).json({ error: 'User is not administrator' });
    }

    const orderList = await Order.findAll({
      attributes: [
        'id',
        'recipient_id',
        'deliveryman_id',
        'product',
        'created_at',
        'updated_at',
      ],
    });

    return res.json(orderList);
  }

  async update(req, res) {
    const order = await Order.findOne({
      where: { id: req.params.id },
    });

    if (!order) {
      return res.status(400).json({ error: 'Order not exists' });
    }

    const { recipient_id, deliveryman_id, product } = req.body;

    const orderUpdated = await order.update({
      recipient_id,
      deliveryman_id,
      product,
    });

    return res.json(orderUpdated);
  }

  async delete(req, res) {
    const order = await Order.findOne({
      where: { id: req.params.id },
    });

    if (!order) {
      return res.status(400).json({ error: 'Order not exists' });
    }

    await order.destroy();

    return res.json();
  }
}

export default new OrderController();
