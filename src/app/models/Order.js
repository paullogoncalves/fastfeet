import Sequelize, { Model } from 'sequelize';

class Order extends Model {
  static init(sequelize) {
    super.init(
      {
        recipient_id: Sequelize.NUMBER,
        deliveryman_id: Sequelize.NUMBER,
        signature_id: Sequelize.NUMBER,
        product: Sequelize.STRING,
        canceled_at: Sequelize.DATE,
        start_date: Sequelize.DATE,
        end_date: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Order;
