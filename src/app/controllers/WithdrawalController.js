import Order from '../models/Order';

class WithdrawalController {
  async update(req, res) {
    const delivery = await Order.findOne({
      where: {
        id: req.params.idOrder,
        deliveryman_id: req.params.idDeliveryman,
      },
    });

    const deliveryUpdate = await delivery.update({
      start_date: req.body.start_date,
    });

    return res.json(deliveryUpdate);
  }
}

export default new WithdrawalController();
