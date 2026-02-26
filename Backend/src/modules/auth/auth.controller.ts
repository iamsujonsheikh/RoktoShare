import type { Request, Response } from "express";


// REGISTER CONTROLLER
export const register = (req: Request, res: Response) => {
    res.send("Register route");
};


// LOGIN CONTROLLER
export const login = (req: Request, res: Response) => {
    res.send("Login route");
};