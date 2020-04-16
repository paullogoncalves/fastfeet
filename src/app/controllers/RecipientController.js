import Recipients from '../models/Recipients';

class RecipientController {
  async store(req, res) {
    const recipients = await Recipients.create(req.body);

    return res.json(recipients);
  }

  async index(req, res) {
    const recipientsList = await Recipients.findAll();

    return res.json(recipientsList);
  }

  async update(req, res) {
    const recipients = await Recipients.findOne({
      where: { id: req.params.id },
    });

    const updateListRecipients = await recipients.update(req.body);

    return res.json(updateListRecipients);
  }

  async delete(req, res) {
    const recipients = await Recipients.findOne({
      where: { id: req.params.id },
    });

    await recipients.destroy();

    return res.json();
  }
}

export default new RecipientController();
