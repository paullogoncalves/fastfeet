import Order from '../models/Order';

class ReceivementController {
  async update(req, res) {
    const delivery = await Order.findOne({
      where: {
        id: req.params.idOrder,
        deliveryman_id: req.params.idDeliveryman,
      },
    });

    const deliveryUpdate = await delivery.update({
      end_date: req.body.end_date,
      signature_id: req.body.signature_id,
    });

    return res.json(deliveryUpdate);
  }
}

export default new ReceivementController();
