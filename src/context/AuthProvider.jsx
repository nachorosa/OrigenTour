import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const token = localStorage.getItem("jwt") || null

    const validateToken = () => {
        if (token != null) {
            fetch("http://localhost:8080/api/auth/validate", {
                method: "POST",
                headers: {
                    "authorization": "Bearer " + token
                }
            }).then(res => {
                if(res.status === 401){
                    location.replace("/")
                }
            })
        }
    }

    return (
        <AuthContext.Provider value={{ token, validateToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
