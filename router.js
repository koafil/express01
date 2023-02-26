import Router from "express";
import controller from "./controller.js";

const router = new Router;

router.get('/users', controller.getAll);
router.get('/users/:id', controller.getOne);
export default router;