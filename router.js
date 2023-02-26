import Router from "express";
import controller from "./controller.js";

const router = new Router;

router.get('/', controller.getAll);
export default router;