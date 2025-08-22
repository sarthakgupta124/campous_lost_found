"use server"
import React from 'react'
import otpModel from '@/models/otp'
import UserModel from '@/models/user' 
import bcrypt from 'bcryptjs';

const otpauth = async(otp_,password_,email_) => {
  const res=await otpModel.findOne({email:email_});
  const isMatch = await bcrypt.compare(otp_,res.otp);
  if(isMatch){
        const hashedPassword = await bcrypt.hash(password_, 10);
        await UserModel.findOneAndUpdate({email:email_},{password:hashedPassword});
        await otpModel.deleteOne({ email: email_ });
        return true;
    }
    else return false
}

export default otpauth
