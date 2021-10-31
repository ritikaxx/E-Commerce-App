const nodeMailer = require("nodemailer");

const sendEmail = async (options) =>{
    const transporter = nodeMailer.createTransport({
        service:"gmail",
        auth:{
            user:"",
            password:""
        }
    })

    const mailoptions ={
        from:"",
        to:"",
        subject:"",
        text:""
    }
};

module.exports = sendEmail;