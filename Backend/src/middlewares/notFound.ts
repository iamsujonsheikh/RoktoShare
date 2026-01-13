import type { NextFunction, Request, Response } from "express"
import { HSC } from "../constants/httpStatus";


// NOT FOUND MIDDLEWARE
const notFound = (req: Request, res: Response, next: NextFunction) => {
    res.status(HSC.NOT_FOUND).json({
        success: false,
        message: "API NOT FOUND!",
        error: {
            path: req.originalUrl,
            message: `Your requested path ${req.originalUrl} is not found on RoktoShare Server.`
        }
    })
};

export default notFound;