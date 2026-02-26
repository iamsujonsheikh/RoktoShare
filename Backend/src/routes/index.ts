import { Router } from "express";
import { authROutes } from "../modules/auth/auth.route";


// DEFAULT ROUTE
export const router = Router();

const moduleRoutes = [
    {
        path: "/auth",
        route: authROutes
    },
    // {
    //     path: "/auth",
    //     route: authRoutes
    // },
    // {
    //     path: "/parcels",
    //     route: parcelRoutes
    // },
];

// LOOP ALL ROUTE
moduleRoutes.forEach((route) => {
    router.use(route.path, route.route)
});