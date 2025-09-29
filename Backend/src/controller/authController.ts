import { type NextFunction,type Request,type Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";


const signup = () =>{
    console.log("Signup")
}

const signin = () =>{
    console.log("Signin")
}

export {signin,signup}