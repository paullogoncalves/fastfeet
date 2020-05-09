import { Op } from 'sequelize';
import { startOfDay, endOfDay, parseISO } from 'date-fns';
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

    const data = await parseISO(req.body.start_date);
    console.log('DATA:', data);
    console.log('DATA:', startOfDay(data));
    console.log('DATA:', endOfDay(data));
    const qnt = await Order.count({
      where: {
        deliveryman_id: req.params.idDeliveryman,
        start_date: {
          [Op.between]: [startOfDay(data), endOfDay(data)],
        },
      },
    });

    if (qnt >= 5) {
      return res
        .status(401)
        .json({ error: 'Withdrawal quantity can not greater than 5.' });
    }

    return res.json(deliveryUpdate);
  }
}

export default new WithdrawalController();
