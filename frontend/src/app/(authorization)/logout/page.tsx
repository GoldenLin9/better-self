"use client"

import React, { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

export default function Logout() {

    const { logout } = useContext(AuthContext);

    logout();
}