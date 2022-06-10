import express from "express";
import asyncHandler from "express-async-handler";
import protect from "../Middleware/AuthMiddleware.js";
import generateToken from "../utils/generateToken.js";
import User from "./../Models/UserModel.js";
import admin from "../Middleware/admin.js";
import sendEmail from "../utils/sendEmail.js";
import crypto from "crypto"


const userRouter = express.Router();













// LOGIN

userRouter.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        user,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid User Data");
    }
  })
);

// REGISTER
userRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    const { firstname, lastname, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error("L'utilisateur existe déjà");
    }

    const user = await User.create({
      firstname,
      lastname,
      email,
      password,
    });

    if (user) {
      res.status(201).json({
        user,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("User creation failed !");
    }
  })
);

userRouter.post(
  "/password/forgot",
  asyncHandler(async (req, res, next) => {

    const user = await User.findOne({email: req.body.email});

    if(!user) {
        return next(new Error("User Not Found", 404));
    }

    const resetToken = await user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false });

    const resetPasswordUrl = `http://localhost:4200/reset-pswd/${resetToken}`;

   



    try {
      await sendEmail({
        email: user.email,
        subject: "Lien pour modifier mot de passe",
        message : ` <table cellpadding="0" cellspacing="0" style="width: 100%; height: 100%; background-color: #cde3f6; text-align: center;">
        <tbody><tr>
        <td style="text-align: center;">
        <table align="center" cellpadding="0" cellspacing="0" id="body" style="background-color: #f4f3ef; width: 100%; max-width: 680px; height: 100%;">
        <tbody><tr>
        <td>
        <table align="center" cellpadding="0" cellspacing="0" class="page-center" style="text-align: left; padding-bottom: 88px; width: 100%; padding-left: 120px; padding-right: 120px;">
        <tbody><tr>
        <td style="padding-top: 24px;">
        <img src="https://res.cloudinary.com/dcsvpezpd/image/upload/v1653875855/unnamed_ndja6c.jpg" style="width: 250px; margin-left:80px;">
        </td>
        </tr>
        <tr>
        <td colspan="2" style="padding-top: 72px; -ms-text-size-adjust: 100%; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; color: #000000; font-family: 'Postmates Std', 'Helvetica', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; font-size: 45px; font-smoothing: always; font-style: normal; font-weight: 600; letter-spacing: -3px; line-height: 50px; mso-line-height-rule: exactly; text-decoration: none;">Mot de passe oubliée ?</td>
        </tr>
        <tr>
        <td style="padding-top: 48px; padding-bottom: 48px;">
        <table cellpadding="0" cellspacing="0" style="width: 100%">
        <tbody><tr>
        <td style="width: 100%; height: 1px; max-height: 1px; background-color: #d9dbe0; opacity: 0.81"></td>
        </tr>
        </tbody></table>
        </td>
        </tr>
        <tr>
        <td style="-ms-text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; color: #9095a2; font-family: 'Postmates Std', 'Helvetica', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; font-size: 16px; font-smoothing: always; font-style: normal; font-weight: 400; letter-spacing: -0.18px; line-height: 24px; mso-line-height-rule: exactly; text-decoration: none; vertical-align: top; width: 100%;">
        Bonjour,<p style="font-weight:bolder;">${user.firstname} ${" "} ${user.lastname}</p>
        <p style="font-family: nunito-regular, sans-serif;font-size: 14px;font-weight: 500;font-style:normal;font-stretch: normal;line-height: 1.71;letter-spacing: normal;color: #001737;">C'est bon, ça arrive !<br><br> Cliquez sur le bouton ci-dessous pour réinitialiser votre mot de passe.</p</td>
        </tr>
        <tr>
        <td>
        <a data-click-track-id="37" href="${resetPasswordUrl}" style="margin-top: 36px; margin-left:70px; -ms-text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; color: #ffffff; font-family: 'Postmates Std', 'Helvetica', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; font-size: 12px; font-smoothing: always; font-style: normal; font-weight: 600; letter-spacing: 0.7px; line-height: 48px; mso-line-height-rule: exactly; text-decoration: none; vertical-align: top; width: 300px; background-color: #2a73e8; border-radius: 28px; display: block; text-align: center; text-transform: uppercase" target="_blank">             Réinitialiser votre mot de passe
        </a>
          
        </td>
        </tr>
        </tbody></table>
          
        </td>
        </tr>
        <footer style="margin-bottom: -25px;">&copy; Copyright 2022 DataSquare</footer>
        </tbody></table>
          `
        
    });
        res.status(200).json({
            success: true,
            message: `Email sent to ${user.email} successfully`,
        });

    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({ validateBeforeSave: false });
        return next(new Error(error.message, 500))
    }
}));


userRouter.put(
  "/password/reset/:token",
  asyncHandler(async (req, res, next) => {
  // create hash token
  try{const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex");

  const user = await User.findOne({ 
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() }
  });

  if(!user) {
      return next(new Error("Invalid reset password token", 404));
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();
  res.status(201).json({
    success: true,
    user,
    token: generateToken(user._id),
   });} catch(err){
     console.log(err)
   }
}));








// PROFILE
userRouter.get(
  "/profile",
  protect,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
      res.json({
        user,
      });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  })
);
//update user for admin
userRouter.put(
  "/:id",
  asyncHandler(async (req, res) => {
    const existuser = await User.findById(req.params.id);
    if (existuser) {
      existuser.etat = req.body.etat || existuser.etat;
      const user = await existuser.save();
      res.json({
        user,
      });
    } else {
      res.status(404);
      throw new Error("User not found !");
    }
  })
);

// UPDATE PROFILE
userRouter.put(
  "/profile",
  protect,
  asyncHandler(async (req, res) => {
    const existuser = await User.findById(req.user._id);
    if (existuser) {
      existuser.firstname = req.body.firstname || existuser.firstname;
      existuser.lastname = req.body.lastname || existuser.lastname;
      existuser.email = req.body.email || existuser.email;

      if (req.body.password) {
        existuser.password = req.body.password;
      }

      const user = await existuser.save();
      res.json({
        user,
        token: generateToken(user._id),
      });
    } else {
      res.status(404);
      throw new Error("User not found !");
    }
  })
);

// GET ALL USER ADMIN
userRouter.get(
  "/",

  asyncHandler(async (req, res) => {
    const users = await User.find({});
    res.json(users);
  })
);

userRouter.post(
  "/ajouter",
  asyncHandler(async (req, res) => {
    const { firstname, lastname,matricule, email, phonenum, profile, pays } =
      req.body;
      const password = crypto.randomBytes(4).toString("hex");

    const userExists = await User.findOne({ email });
    const loginUrl = `http://localhost:4200/sign-in`;


    if (userExists) {
      res.status(400);
      throw new Error("L'utilisateur existe déjà");
    }

    const user = await User.create({
      firstname,
      lastname,
      matricule ,
      email,
      password,
      phonenum,
      profile,
      pays,
    });

    if (user) {
      await sendEmail({
        email: user.email,
        subject: "Invitation à GTE ",
        message: ` 
        <div style="background-color:#f5f7fb">
    <table border="0" cellspacing="0" cellpadding="0" width="100%" height="100%">
        <tbody><tr>
            <td align="left" valign="top">
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tbody><tr>
                        <td width="100%">
                            <table style="background-color:#f5f7fb" width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tbody><tr>
                                    <td width="100%" align="center">
                                       
                                        <table style="max-width:600px;width:600px" width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tbody><tr>
                                                <td width="100%">
                                                    <table style="background-color:#f5f7fb" bgcolor="#f5f7fb" width="100%" border="0" cellspacing="0" cellpadding="0">
                                                        <tbody><tr>
                                                            <div valign="top">
                                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
<tbody>
    <tr>
        <td style="padding-top:40px;padding-right:24px;padding-bottom:40px;padding-left:24px" align="center" valign="top">
           
            <table style="max-width:100%" width="166" border="0" cellspacing="0" cellpadding="0">
                <tbody>
                <tr>
                <td style="padding-top: 24px;">
                <img src="https://res.cloudinary.com/dcsvpezpd/image/upload/v1653875855/unnamed_ndja6c.jpg" style="width: 250px; margin-left:80px;">
                </td>
                </tr>
                </tbody>
            </table>
           
        </td>
    </tr>
</tbody>
</table>

                                                               
                                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                    <tbody><tr>
                                                                        <td style="padding:20px" valign="top">
                                                                            <table style="border-radius:4px;border-collapse:separate!important;background-color:#ffffff" bgcolor="#ffffff" width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                                <tbody><tr>
                                                                                    <td style="padding:20px" valign="top">
                                                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                                            <tbody><tr>
                                                                                                <td style="padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:10px" valign="top">
                                                                                                    <div style="font-family:arial,sans-serif;word-break:break-word;font-size:18px;color:#131313;line-height:25px;text-align:left">
                                                                                                        <p style="padding:0;margin:0;text-align:center"><span style="font-size:18px"><strong>Invitation à GTE</strong></span></p>
                                                                                                    </div>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody></table>
                                                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                       
                                                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                                            <tbody><tr>
                                                                                                <td style="padding-top:16px;padding-right:10px;padding-bottom:16px;padding-left:10px" valign="top">
                                                                                                    <div style="font-family:arial,sans-serif;word-break:break-word;font-size:18px;color:#131313;line-height:25px;text-align:left">
                                                                                                        <p style="padding:0;margin:0;text-align:center"><span style="font-size:18px"><strong>Bonjour ${firstname} ${lastname},</strong></span></p>
                                                                                                        <p style="padding:0;margin:0;text-align:center">
                                                                                                            <span style="font-size:14px">
                                                                                                                Vous avez été invité à faire partie de <b>Data Square</b> en tant que collaborateur.<br> Voici votre adresss mail et mot de passe pour vous connecter à GTE :
                                                                                                            </span><br>
                                                                                                            <span> Email : ${email}</span><br>
                                                                                                            <span> Mot de passe :${password}</span>

                                                                                                        </p>
                                                                                                    </div>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody></table>
                                                                                       
                                                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                                            <tbody><tr>
                                                                                                <td style="padding:12px" align="center" valign="top">
                                                                                                    <a data-click-track-id="37" href="${loginUrl}" style="margin-top: 36px; margin-left:40px; -ms-text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; color: #ffffff; font-family: 'Postmates Std', 'Helvetica', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; font-size: 12px; font-smoothing: always; font-style: normal; font-weight: 600; letter-spacing: 0.7px; line-height: 48px; mso-line-height-rule: exactly; text-decoration: none; vertical-align: top; width: 300px; background-color: #2a73e8; border-radius: 28px; display: block; text-align: center; text-transform: uppercase" target="_blank">Se connecter
                                                                                                    </a>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody></table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody></table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody></table>
                                                            </div>

        
        `,
      });
      res.status(200).json({
        success: true,
        message: `Email sent to ${user.email} successfully`,
      });
    } else {
      res.status(400);
      throw new Error("User creation failed !");
    }
  })
);

userRouter.delete(
  "/:id",

  async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("user has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

export default userRouter;
