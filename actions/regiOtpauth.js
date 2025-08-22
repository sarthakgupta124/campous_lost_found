"use server"
import otpModel from '@/models/otp'
import bcrypt from 'bcryptjs';

const regiOtpauth = async (otp_, email_) => {
    const res = await otpModel.findOne({ email: email_ });
    const isMatch = await bcrypt.compare(otp_, res.otp);
    if (isMatch) {
        await otpModel.deleteOne({ email: email_ });
        return true;
    }
    else return false;
}

export default regiOtpauth
