// routes/contact.route.js

import express from "express";
import contactController from "../controller/contact.controller.js";

const router = express.Router();

router.post("/", contactController.submitContactForm);

export default router;
