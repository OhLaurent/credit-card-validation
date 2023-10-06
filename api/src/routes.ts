import { Router } from "express";
import { appendFile } from "fs";
import { createCreditCardController } from "./controllers/CreditCardController";

const routes = Router()

routes.post('/validate-credit-card', createCreditCardController().validate)

export { routes }