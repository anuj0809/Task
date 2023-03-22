const nodemailer = require("nodemailer");
require("dotenv").config();

async function SayHello(req, res) {
  try {
    // testing connection
    res.status(200).json({
      success: true,
      message: "Hello, ✅ Backend connected successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: error,
    });
  }
}

async function ContactUs(req, res) {
  try {
    const { name, mobile, email, message } = req.body;

    // create reusable transport object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.sendinblue.com",
      port: 587,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    // setuping email data with html body
    const mailOptions = {
      from: `${name} <${email}>`, // sender address
      to: "info@redpositive.in", // receiver address
      subject: "Aman's Intern Task", // subject line
      html: `<p style="margin: 0; margin-bottom: 16px;">Hello Redpositive Service,</p>
      <p style="margin: 0; margin-bottom: 16px;">I am Aman Kumar, an undergraduate student at IIT Kharagpur. This is a dummy email body for the Contact Us page of React Native app to submit user's query.</p>
      <div style="margin: 0; margin-bottom: 16px; background-color: #f0f0f0; border-radius: 10px; padding: 16px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);">
      <p style="margin: 0; margin-bottom: 16px;"><i>User Contact Us Query?</i></p>
      <p style="margin: 0; margin-bottom: 4px;">Name: ${name}</p>
      <p style="margin: 0; margin-bottom: 4px;">Mobile: ${mobile}</p>
      <p style="margin: 0; margin-bottom: 4px;">Email: ${email}</p>
      <p style="margin: 0; ">Message: ${message}</p>
      </div>
      <p style="margin: 0;">Thank you. Looking forward to hear positive response from your team soon.</p>`,
    };

    // sending mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log("Error: " + error);
        res.status(400).json({
          success: false,
          message: "📪 Failed to send your message!",
        });
      } else {
        console.log("Email sent: " + info.response);
        res.status(200).json({
          success: true,
          message: "📫 Your message has been sent successfully!",
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: error,
    });
  }
}

module.exports = {
  SayHello,
  ContactUs,
};
