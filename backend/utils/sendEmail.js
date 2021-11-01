const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure:false,
    service: "gmail",
    logger: true,
                debug: true,
                secureConnection: false,
    auth: {
      user: process.env.SMPT_MAIL,
      pass:  process.env.SMPT_PASSWORD,
    },
    tls:{
        rejectUnAuthorized:true
    },
  });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;