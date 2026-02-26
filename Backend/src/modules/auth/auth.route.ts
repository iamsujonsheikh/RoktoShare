import { Router } from "express";
import { login, register } from "./auth.controller";


// AUTH ROUTES
export const authROutes = Router()

    .post("/register", register)
    .post("/login", login)