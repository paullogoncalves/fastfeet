import Order from '../models/Order';

class DeliveriesController {
  async index(req, res) {
    const deliveries = await Order.findAll({
      where: { deliveryman_id: req.params.idDeliveryman },
      attributes: ['id', 'recipient_id', 'product', 'created_at'],
    });

    return res.json(deliveries);
  }
}

export default new DeliveriesController();
