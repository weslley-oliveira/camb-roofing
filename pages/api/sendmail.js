
const nodemailer = require("nodemailer");

export default async (req, res) => {
   
    const { USER_EMAIL, USER_PASS } = process.env

    if (req.method === "POST"){

        const {email, text, name} = req.body;
       
        const transporter = nodemailer.createTransport({
            host: "smtp.zoho.eu",
            port: 465,
            secure: true,
            auth: {
                user: `${USER_EMAIL}`,
                pass: `${USER_PASS}`
            },
          });

          const mailOption = {
            from: `'<${USER_EMAIL}>'`,
            to: `${USER_EMAIL}`,
            subject: `WOow! E-mail ${email} '`,
            text: `Name: ${name}

                Email: ${email}

                Message: 
                
                ${text}
            `,
          };
        
          transporter.sendMail(mailOption, (err, response) => {
            if (err) {
              console.log(err);
              res.send("error" + JSON.stringify(err));
            } else {
              console.log("mail send");
              res.send("success");
            }
        });                       
            
    }    
      
}
