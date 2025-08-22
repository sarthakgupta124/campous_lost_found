"use client"
import React from 'react'
import { signIn } from 'next-auth/react'

const login = async (form) => {
    const res = await signIn("credentials", {
        redirect:false,
        email: form.email,
        password: form.password,
    });
    return res;
}

export default login
