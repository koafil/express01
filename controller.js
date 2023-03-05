import service from './service.js';
class Controller {
  async getAll(req, res) {
    try {
      let rows = await service.getAll();
      res.send(rows);
    } catch (e) {
      res.status(500).send(e);
    }
  }
  async getOne(req, res) {
    try {
      let rows = await service.getOne(req.params.id);
      res.send(rows);
    } catch (e) {
      res.status(500).send(e);
    }
  }
}

export default new Controller;