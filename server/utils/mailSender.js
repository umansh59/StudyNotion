const nodemailer = require("nodemailer");
require("dotenv").config();
const mailSender = async(email,title,body)=>{
    try {
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: 465,
            secure:true,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS,
            },
        });
        

        try {
            let info = await transporter.sendMail({
                from :'educatX by Janinder',
                to:`${email}`,
                subject:`${title}`,
                html:`${body}`,
            });
            console.log(info);
            return info;
        } catch (error) {
            console.log("Error is : ",error);
        }
        
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = mailSender;