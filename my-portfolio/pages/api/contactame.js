require('dotenv').config()

export default function (req, res) {
    let nodemailer = require('nodemailer')
    const PASSWORD = process.env.password

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'nachportfolio@gmail.com',
      pass: PASSWORD,
    },
    secure: true,
  })
  console.log(req.body)

  const mailData = {
    from: 'nachpotfolio@gmail.com',
    to: 'nachobj@gmail.com',
    subject: `Message From ${req.body.name}`,
    text: req.body.texto | "Sent from: " + req.body.email,
    html: `<div>${req.body.texto}</div><p>Sent from:
    ${req.body.email}</p>`
   }

   transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })
  res.status(200)
  }