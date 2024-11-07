// src/utils/PrivateRoute.tsx

import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { RootState } from "../store/store";

interface IPrivateRoute{
    component: ReactNode,
}

const PrivateRoute = ({ component }:IPrivateRoute) => {
    //FILL HERE 3.6
    const floorAccess = useSelector((state: RootState) => state.floorAccess.floorAccess);
    const { index } = useParams<{ index: string }>();
    const navigate = useNavigate();

    useEffect(() => {
        if (!floorAccess[parseInt(index || "0")]) {
            navigate("/forbidden");
        }
    }, [index, floorAccess, navigate]);

    return <>{component}</>;
};

export default PrivateRoute